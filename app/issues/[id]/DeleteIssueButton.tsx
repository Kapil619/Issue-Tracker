"use client";

import { Button, AlertDialog, Flex } from "@radix-ui/themes";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return <Button color="red">Delete Issue</Button>;
};

{
  /* expected single child error 
   <AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red">Delete Issue</Button>;
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>Confirm Delete</AlertDialog.Title>
    <AlertDialog.Description>
      Are you sure you want to delete this issue?
    </AlertDialog.Description>
    <Flex mt={"4"} gap={"3"}>
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button color="red">Delete</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>; */
}
export default DeleteIssueButton;
