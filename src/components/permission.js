import React from "react";
import { hasAnyRole } from "~/hooks/useRole";

export default function Permission({ roles, children }) {
  const has = hasAnyRole(roles);
  return has ? children : <> </>;
}
