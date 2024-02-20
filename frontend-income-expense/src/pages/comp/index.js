import React from "react";
import One from "@/compExpamle/One";
import MainProv from "@/compExpamle/MainProv";
import ColorProv from "@/compExpamle/ColorProv";

export default function index() {
  return (
    <div>
      <ColorProv>
        <MainProv>
          <One />
        </MainProv>
      </ColorProv>
    </div>
  );
}
