import { useState, useEffect } from 'react';
import { NetworkIDEnum, Social } from '@builddao/near-social-js';
import { ViewMethod } from '@/hooks/near-method';
import { AvatarProfileProps } from '@/types/types';
import { NextPage } from 'next';

const AvatarProfile: NextPage<AvatarProfileProps> = ({ accountId, size = 40,style, image }) => {
    const [avatar, setAvatar] = useState<string | null>(null);
    const [oldUrl, setOldUrl] = useState<string | null>(null);
    const [imageUrls, setImageUrl] = useState<string | null>(null);
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const [img, setImg] = useState<string | null>(null);

    const rex =
    /^(?:https?:\/\/)(?:[^\/]+\/ipfs\/)?(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(?:\.[^\/]+)?(\/.*)?$/g;
    rex.lastIndex = 0;

    const replaceIpfs = (imageUrl: string) => {
        if (oldUrl !== imageUrl && imageUrl) {
            const match = rex.exec(imageUrl);
            if (match) {
                const newImageUrl = `https://ipfs.near.social/ipfs/${match[1]}${
                match[2] || ""
                }`;
                if (newImageUrl !== imageUrl) {
                    setOldUrl(imageUrl);
                    setImageUrl(newImageUrl);
                    return;
                }
            }
        }
        if (imageUrl !== null) {
            setImageUrl(null);
        }
    };

    const thumb = (imageUrl: string) =>
        thumbnail && imageUrl && !imageUrl.startsWith("data:image/")
            ? `https://i.near.social/${thumbnail}/${imageUrl}`
            : imageUrl;

    useEffect(() => {
        const getAvatarBySocial = async () => {
            if (accountId) {
                const social = new Social({
                    contractId: process.env.NEXT_PUBLIC_NETWORK=="mainnet"?"social.near":"v1.social08.testnet",
                    network: process.env.NEXT_PUBLIC_NETWORK=="mainnet"?NetworkIDEnum.Mainnet:NetworkIDEnum.Testnet,
                });
                try {
                const result: any = await social.get({
                    keys: [`${accountId}/profile/**`],
                    useApiServer:process.env.NEXT_PUBLIC_NETWORK=="mainnet"?true:false
                });
                const avatarUrl = result?.[accountId]?.profile?.image?.ipfs_cid;
                // Check for NFT avatar
                const nftData = result?.[accountId]?.profile?.image?.nft;
                if (nftData) {
                    const { contractId, tokenId } = nftData;
                    try {
                        const nftMetadata = await ViewMethod(contractId, 'nft_metadata', { });
                        const tokenMetadata = await ViewMethod(contractId, 'nft_token', { token_id: tokenId });
                        //console.log(tokenMetadata)
                        let imageUrl = null;
                        if (nftMetadata && tokenMetadata) {
                            let tokenMedia = tokenMetadata.media || "";
                            imageUrl =
                                tokenMedia.startsWith("https://") ||
                                tokenMedia.startsWith("http://") ||
                                tokenMedia.startsWith("data:image")
                                    ? tokenMedia
                                    : nftMetadata.base_uri
                                    ? `${nftMetadata.base_uri}/${tokenMedia}`
                                    : tokenMedia.startsWith("Qm") || tokenMedia.startsWith("ba")
                                    ? `https://ipfs.near.social/ipfs/${tokenMedia}`
                                    : tokenMedia;
                            if (!tokenMedia && tokenMetadata.reference) {
                                if (
                                    nftMetadata.base_uri === "https://arweave.net" &&
                                    !tokenMetadata.reference.startsWith("https://")
                                ) {
                                    const res = await fetch(`${nftMetadata.base_uri}/${tokenMetadata.reference}`);
                                    const data = await res.json();
                                    imageUrl = data.media;
                                } else if (
                                    tokenMetadata.reference.startsWith("https://") ||
                                    tokenMetadata.reference.startsWith("http://")
                                ) {
                                    const res = await fetch(tokenMetadata.reference);
                                    const data = await res.json();
                                    imageUrl = data.media;
                                } else if (tokenMetadata.reference.startsWith("ar://")) {
                                    const res = await fetch(
                                    `${"https://arweave.net"}/${tokenMetadata.reference.split("//")[1]}`
                                    );
                                    const data = await res.json();
                                    imageUrl = data.media;
                                }
                            }
                            if (!imageUrl) {
                                imageUrl = null;
                            }
                        }
                        const img = imageUrl !== null ? imageUrls : imageUrl;
                        const src = img !== false ? img : 'https://ipfs.near.social/ipfs/bafkreibiyqabm3kl24gcb2oegb7pmwdi6wwrpui62iwb44l7uomnn3lhbi';
                        setImg(src);
                        setAvatar(thumb(src));
                        // const nftAvatarUrl = tokenMetadata?.metadata?.media;
                        // if (nftAvatarUrl) {
                        //     setAvatar(nftAvatarUrl);
                        //     return; // Exit if NFT avatar is found
                        // }
                    } catch (error) {
                        console.error("Error fetching NFT metadata:", error);
                    }
                }
                if (avatarUrl) {
                    setAvatar(`https://ipfs.near.social/ipfs/${avatarUrl}`);
                }
                } catch (error) {
                console.error("Error fetching avatar by social.get:", error);
                }
            }
        };

    getAvatarBySocial();
    }, [accountId]);

    return (
        <div className="avatar-profile">
        {avatar||image ? (
            <img
            src={avatar||image&&`https://ipfs.near.social/ipfs/${image}`}
            alt="User Avatar"
            width={size}
            height={size}
            style={{ width: `${size}px`, height: `${size}px` }}
            className={`rounded-full object-cover ${style} ${image && 'border-[1px] border-aipgf-geyser border-solid shadow-sm'}`}
            onError={() => replaceIpfs(img as string)}
            />
        ) : (
            <img
                src="https://ipfs.near.social/ipfs/bafkreibiyqabm3kl24gcb2oegb7pmwdi6wwrpui62iwb44l7uomnn3lhbi"
                alt="Default Avatar"
                width={size}
                height={size}
                style={{ width: `${size}px`, height: `${size}px` }}
                className={`rounded-full object-cover ${style}`}
            />
        )}
        </div>
    );
};

export default AvatarProfile;