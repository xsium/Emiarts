export function moduleFooter() {
  if (document.getElementById("nofooter")) {
    return 0;
  } else {
    const currentYear = new Date().getFullYear();
    document.querySelector("footer").innerHTML = `
    <div class=footContent>
      <p>&copy; ${currentYear} EmiArts Website</p>
    </div>
    
`;
  }
}
