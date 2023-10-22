"use client";

import { Button, AlertDialog, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [error, seterror] = useState(false);

  const deleteIssue = async () => {
    try {
      await axios.delete(`/api/issues/${issueId}`);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      seterror(true);
    }
  };
  return (
    <>
      <Button color="red" onClick={deleteIssue}>
        Delete Issue
      </Button>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This issue couldn't be deleted
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            mt={"2"}
            onClick={() => seterror(false)}
          >
            OK
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
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
