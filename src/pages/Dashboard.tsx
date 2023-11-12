"use client";
import { lazy, Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/seperator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bubble,
  BubbleContent,
  BubbleDescription,
} from "@/components/ui/bubble";
import Draggable from "react-draggable";
import { ComicData } from "@/lib/interfaces";
import Shimmer from "@/components/Shimmer";
import InstructionDialog from "@/components/InstructionDialog";
import Spinner from "@/components/ui/spinner";
const SheetForm = lazy(() => import("@/components/SheetForm"));

function DashBoard() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [dialog, setDialog] = useState<boolean>(false);
  const [comic, setComic] = useState<ComicData>();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="flex flex-col mt-4 ">
      <div className="flex flex-row justify-between w-full px-[20px] flex-wrap">
        <h3 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          Comic Creator
        </h3>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            className="rounded-full px-6"
            onClick={() => {
              setDialog(true);
            }}
          >
            <span className="text-[14px]">Instructions</span>
          </Button>
          <InstructionDialog dialog={dialog} setDialog={setDialog} />
          <Button
            variant="default"
            className="rounded-full px-6"
            onClick={() => {
              setIsOpen(true);
            }}
            disabled={loading}
          >
            <span className="text-[14px]">Add a comic</span>
          </Button>
        </div>
      </div>
      <Separator className="my-[8px]" orientation="horizontal" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 mx-4 mt-8">
        {comic &&
          comic.cardArray.map((card) => (
            <Card
              key={card.id}
              className="md:w-[100%/3] lg:w-[100%/5] relative"
            >
              <CardContent className=" h-[280px] p-[0px] bg-no-repeat">
                <img
                  className="h-full w-full bg-no-repeat object-cover rounded-lg"
                  src={card.img}
                />
              </CardContent>
              {card.text !== "" && (
                <Draggable bounds="parent">
                  <Bubble
                    className="absolute left-0 top-0"
                    variant={card.bubble}
                  >
                    <BubbleContent>
                      <BubbleDescription>{card.text}</BubbleDescription>
                    </BubbleContent>
                  </Bubble>
                </Draggable>
              )}
            </Card>
          ))}
        {loading && <Shimmer />}
        <Suspense fallback={<Spinner />}>
          <SheetForm
            setLoading={setLoading}
            setComic={setComic}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          ></SheetForm>
        </Suspense>
      </div>
    </div>
  );
}
export default DashBoard;
