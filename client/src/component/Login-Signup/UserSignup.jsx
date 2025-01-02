import React from "react";
import { Form, Input, Button, DatePicker, Link } from "@nextui-org/react";

export default function UserSignup() {
  const [action, setAction] = React.useState(null);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-screen-sm md:max-w-xl  mt-14 mb-14">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Student Regestration
        </h2>
        <Form
          className="w-full flex flex-col gap-6"
          validationBehavior="native"
          onReset={() => setAction("login reset")}
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));
            setAction(`submit ${JSON.stringify(data)}`);
          }}
        >

          <Input isRequired errorMessage="Please enter fullname" label="Full Name" labelPlacement="outside" name="name" placeholder="Enter your full name" />
          <Input isRequired errorMessage="Please enter valid email" label="Email" labelPlacement="outside" name="email" type="email" placeholder="Enter your email" />
          <Input isRequired errorMessage="Please enter valid phoneNumber" label="Phone Number" labelPlacement="outside" name="phone" type="number" placeholder="Enter your phone number" />
    
          <Input label="Address Line 1" labelPlacement="outside" name="addressLine1" placeholder="Enter your address" />
          <div className="flex gap-2 w-full">
            <DatePicker isRequired label="Date of Birth" labelPlacement="outside" name="dob" />
            <Input isRequired errorMessage="Please upload profile image" label="Image" labelPlacement="outside" type="file" className="rounded-lg" />
          </div>
       

          <Input
            isRequired
            errorMessage="Please enter a valid password"
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Enter your password"
            type="password"
            className="rounded-lg"
          />

        <Input
            isRequired
            errorMessage="Please enter a valid conformPassword"
            label="ConformPassword"
            labelPlacement="outside"
            name="ConformPassword"
            placeholder="Enter your conformPassword"
            type="password"
            className="rounded-lg"
          />
          <div className="flex gap-4">
            <Button color="primary" type="submit" className="w-full">
              Submit
            </Button>
            <Button type="reset" variant="flat" className="w-full">
              Reset
            </Button>
          </div>
          {action && (
            <div className="mt-4 text-sm text-gray-500">
              Action: <code>{action}</code>
            </div>
          )}
        </Form>
        <p className="text-base font-bold text-left text-gray-600 mt-6">
          Already have an account? <Link href="/userLogin" className="text-blue-700 underline" > Login</Link>
        </p>
      </div>
    </div>
  );
}
