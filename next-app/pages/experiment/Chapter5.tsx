import React from "react";
import useSWR from "swr";

export default function Chapter5() {
  const { data } = useSWR("/data.json");
  return <div></div>;
}
