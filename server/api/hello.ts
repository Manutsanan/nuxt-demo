export default defineEventHandler((event) => {
  return "Server time = " + new Date().toUTCString();
});