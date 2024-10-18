import "./App.css";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
function App() {
  return (
    <>
      <div className="font-robo">
        <div className="text-left">
          <h2 className="font-extrabold text-3xl hover:text-green-700 cursor-pointer">
            Contact Us
          </h2>
        </div>
        {/* contact form */}
        <div className="">
          <form action="">
            <div className="flex flex-row gap-4 items-start text-left pt-4">
              {" "}
              {/* first name */}
              <div className="">
                <Label className="text-xs">
                  First Name <span className="text-[#0c7d69]">*</span>
                </Label>
                <Input type="text" />
              </div>
              {/* last name */}
              <div>
                <Label className="text-xs">
                  Last Name <span className="text-[#0c7d69]">*</span>
                </Label>
                <Input type="text" />
              </div>
            </div>

            {/* email */}
            <div className="text-left pt-4 ">
              <Label htmlFor="email" className="text-xs">
                Email Address <span className="text-[#0c7d69]">*</span>
              </Label>
              <Input type="text" />
            </div>

            {/* radio */}
            <div className="flex text-sm font-medium pt-4 ">
              <p className="pb-4 text-xs">
                Query Type <span className="text-[#0c7d69]">*</span>
              </p>
            </div>

            <div className="flex justify-around gap-4">
              <div className="flex items-center gap-2 border-2 border-gray-200 w-full p-3 rounded-md">
                <Input type="radio" name="queryType" className="w-4 h-auto " />
                <Label className="text-xs">General Enquiry</Label>
              </div>
              <div className="flex items-center gap-2 border-2 border-gray-200 w-full p-3 rounded-md">
                <Input type="radio" name="queryType" className="w-4 h-auto" />
                <Label className="text-xs">Support Request</Label>
              </div>
            </div>

            {/* message */}

            <div className="flex flex-col items-start pt-4 gap-2">
              <Label className="text-xs">
                Message <span className="text-[#0c7d69]">*</span>
              </Label>
              <Input type="text" className="py-12" />
            </div>

            {/* Checkbox */}

            <div className="flex gap-4 pt-4">
              {/* <Checkbox id="terms1" className="rounded-sm bg-white p-1" /> */}
              <Input type="checkbox" className="h-auto w-4" />
              <div className="flex items-center">
                <label
                  htmlFor="terms1"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I consent to being contacted by the team{" "}
                  <span className="text-[#0c7d69]">*</span>
                </label>
              </div>
            </div>
            <div className="flex w-full pt-4">
              <Button
                type="submit"
                className="w-full bg-[#0c7d69] text-white hover:bg-green-600"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
