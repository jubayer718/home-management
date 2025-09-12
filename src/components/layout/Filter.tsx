import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Container from "../Container";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { MdTune,MdSearch } from "react-icons/md";
import { Button } from "../ui/button";

const Filter = () => {
  return (
    <Container className="absolute -bottom-14 flex items-center justify-center">
      <Tabs defaultValue="tab-1" className={cn(" items-center text-white  w-full ") }>

        <div className="  flex items-start  w-full">
          
        <TabsList className={cn("bg-white text-black ") }>
        <TabsTrigger value="tab-1">All</TabsTrigger>
        <TabsTrigger value="tab-2">For Sale</TabsTrigger>
        <TabsTrigger value="tab-3">For Rent</TabsTrigger>
        </TabsList>
        </div>
        
        <div className="bg-white text-black w-full -mt-3 p-2 rounded-2xl rounded-tl-none">
          <TabsContent value="tab-1" className={cn("w-full  ")}>
            <div className=" grid grid-cols-2 md:grid-cols-5 p-2">
              <div className="space-y-2 border-r-2">
                <Label className="text-muted-foreground font-semibold flex items-center justify-center" >Search</Label>
               <Input type="text" className="bg-white border-0 outline-0 text-center shadow-none" placeholder="Search Keyword"/>
              </div>
              <div className="space-y-2 border-r-2">
                 <Label className="text-muted-foreground font-semibold flex items-center justify-center" >Looking For</Label>
               <Input type="text" className="bg-white border-0 outline-0 text-center shadow-none" placeholder="Type"/>
              </div>
              <div className="space-y-2 border-r-2">
                 <Label className="text-muted-foreground font-semibold flex items-center justify-center" >Location</Label>
               <Input type="text" className="bg-white border-0 outline-0 text-center shadow-none" placeholder="Location"/>
              </div>
              <div className="space-y-2 border-r-2 ">
                 <Label className="text-muted-foreground font-semibold flex items-center justify-center" >Price</Label>
              <p className="text-center">$0 - $5,800</p>
              </div>
              <div className="flex items-center gap-4 p-2">
                <p className="flex items-center gap-2"><MdTune /> Advance</p>
                <Button className="text-white bg-[#EB6753] cursor-pointer"><MdSearch/> Search</Button>
              </div>

            </div>
       
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="text-muted-foreground p-4 text-center text-xs">
          Content for Tab 2
        </p>
      </TabsContent>
      <TabsContent value="tab-3">
        <p className="text-muted-foreground p-4 text-center text-xs">
          Content for Tab 3
        </p>
      </TabsContent>
     </div>
    </Tabs>
    </Container>
  )
};

export default Filter;