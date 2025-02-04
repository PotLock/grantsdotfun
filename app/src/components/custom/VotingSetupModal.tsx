import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { useState } from "react";

interface VotingSetupModalProps {
    open: boolean;
    onClose: () => void;
}

const VotingSetupModal: React.FC<VotingSetupModalProps> = ({ open, onClose }) => {
    const [votingMethod, setVotingMethod] = useState("manual");

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="text-xl text-sidebar-foreground text-center font-medium">Voting Preferences</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6 py-4">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Label className="font-medium">Voting Method</Label>
                                    </div>
                                </div>
                                <Select 
                                    value={votingMethod} 
                                    onValueChange={setVotingMethod}
                                    defaultValue="manual"
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select voting method" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem disabled value="manual">Manual Voting</SelectItem>
                                        <SelectItem value="ai">AI Voting Rules</SelectItem>
                                        <SelectItem value="delegate">Delegate Vote</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>


                            {votingMethod === "ai" && (
                                <div className="space-y-2">
                                    <Label className="font-medium mb-2">AI Voting Rules</Label>
                                    <Input 
                                        placeholder="e.g Never allow weekly pool size to exceed 2000 $GRANT" 
                                        className="w-full placeholder:text-sidebar-foreground text-sidebar-foreground shadow-none"
                                    />
                                </div>
                            )}

                            {votingMethod === "delegate" && (
                                <div className="space-y-2">
                                    <Label className="font-medium mb-2">Delegate your vote to</Label>
                                    <Input 
                                        placeholder="Select Delegate or Enter an Address" 
                                        className="w-full placeholder:text-sidebar-foreground text-sidebar-foreground shadow-none"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <Button className="bg-blue-500 text-white hover:bg-blue-600">
                    Set Up Voting
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default VotingSetupModal; 