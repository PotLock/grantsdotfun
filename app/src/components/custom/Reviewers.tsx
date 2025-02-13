import { Reviewer } from "@/types/agent";
import Link from "next/link";

const Reviewers = ({ reviewers }: { reviewers: Reviewer[] }) => {

    return (
      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-base sm:text-lg font-semibold text-sidebar-foreground">Reviewers (4)</h3>
          <div className="w-full h-[1px] bg-gray-200"/>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviewers.map((reviewer, i) => (
            <Link key={i} href={`https://${reviewer.platform}.com/${reviewer.username}`} className="flex items-center gap-2 rounded-lg border p-2">
              <div className="h-10 w-10 rounded-full bg-muted relative flex-shrink-0">
                <img src={reviewer.image} alt={reviewer.name} className="w-full h-full object-cover rounded-full aspect-square" />
                <div className="absolute -bottom-2 -right-1">
                  <div className="w-5 h-5 rounded-full bg-white p-1 flex items-center justify-center border border-gray-200">
                    <img src="/assets/icons/prime-twitter.svg" alt="Twitter" className="w-3 h-3" />
                  </div>
                </div>
              </div>
              <div>
                <div className="font-medium text-sm md:text-base text-sidebar-foreground">{reviewer.name}</div>
                <div className="text-xs md:text-sm text-sidebar-foreground">{reviewer.username}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }
  
export default Reviewers;