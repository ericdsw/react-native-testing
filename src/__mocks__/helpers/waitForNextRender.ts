/* eslint-disable promise/avoid-new */
export default async function waitForNextRender(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 0));
}
