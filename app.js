

  document.getElementById("openImageBtn").addEventListener("click", function() {
    document.getElementById("imageModal").style.display = "block";
  });

  document.getElementById("closeModalBtn").addEventListener("click", function() {
    document.getElementById("imageModal").style.display = "none";
  });


  const scrollers=document.querySelectorAll(".scroller")

  if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
    addAnimation();
  }

  function addAnimation(){
    scrollers.forEach((scroller) =>{
      scroller.setAttribute('data-animated',true);

      const scrollerInner=scroller.querySelector(".inner_scroller");
      const scrollerContent=Array.from(scrollerInner.children);
      
      scrollerContent.forEach(item=>{
        const duplicateItem=item.cloneNode(true);
        duplicateItem.setAttribute("aria-hidden",true);
        scrollerInner.appendChild(duplicateItem);
      });
    });
  }


   // Set the wedding date and time (year, month (0-11), day, hour, minute, second)
   const weddingDate = new Date(2023, 10, 29, 11, 45, 0);

   function updateCountdown() {
     const now = new Date();
     const timeRemaining = weddingDate - now;
 
     if (timeRemaining <= 0) {
      resetCountdown();
     } else {
       const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
       const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
 
       document.getElementById("days").textContent = days;
       document.getElementById("hours").textContent = hours;
       document.getElementById("minutes").textContent = minutes;
     }
   }
 
   function resetCountdown() {
    let newMonth = weddingDate.getMonth() + 1;

    // Check if the new month goes past December
    if (newMonth > 11) {
        newMonth = 0; // Reset to January
        weddingDate.setFullYear(weddingDate.getFullYear() + 1); // Increment the year
    }

    weddingDate.setMonth(newMonth);

    // Check if the next month has fewer days and adjust the date if necessary
    const daysInNextMonth = new Date(weddingDate.getFullYear(), newMonth + 1, 0).getDate();
    if (weddingDate.getDate() > daysInNextMonth) {
        weddingDate.setDate(daysInNextMonth);
    }

    // Optional: update the countdown display to reflect the reset immediately
    updateCountdown();
}
   // Update the countdown every second
   setInterval(updateCountdown, 1000);
 
   // Initial update
   updateCountdown();

