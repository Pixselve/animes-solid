import { createHandler, renderStream, StartServer } from "solid-start/entry-server";
import { inlineServerModules } from "solid-start/server";

export default createHandler(
  inlineServerModules,
  renderStream((context) => <StartServer context={ context }/>)
);
