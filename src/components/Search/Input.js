import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
export function InputWithButton() {
  const { query, setQuery } = useGlobalContext();
  const navigate = useNavigate();
  const querySearch = () => {
    navigate("/search");
  };
  return (
    <div className="relative flex w-full max-w-[24rem] mx-auto my-4">
      <Input
        type="text"
        label="Search latest news"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        onClick={querySearch}
        size="sm"
        color={query ? "gray" : "blue-gray"}
        disabled={!query}
        className="!absolute right-1 top-1 rounded"
      >
        Search
      </Button>
    </div>
  );
}
