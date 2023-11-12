import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoDialogProps } from "@/lib/interfaces";

const InstructionDialog: React.FC<InfoDialogProps> = ({
  dialog,
  setDialog,
}) => {
  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome</DialogTitle>
          <DialogDescription>
            Refer to the instructions and get started
          </DialogDescription>
        </DialogHeader>
        <div>
          <ul className="list-disc pl-6 text-sm">
            <li>
              Click the "Add a comic panel" button to start creating your comic.
            </li>
            <li>
              Provide a prompt to generate an image that will form the basis of
              your comic.
            </li>
            <li>
              Enter the text for your speech bubbles to add dialogues and
              captions to your comic.
            </li>
            <li>
              Select the type of speech bubble you want from the available
              options.
            </li>
            <li>
              Drag and position the speech bubbles around your comic card as you
              like.
            </li>
            <li>
              Fine-tune the placement to create the perfect composition for your
              comic.
            </li>
            <li>
              Once satisfied with your creation, your comic is ready to be
              generated and displayed on the canvas.
            </li>
          </ul>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InstructionDialog;
