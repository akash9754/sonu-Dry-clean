let currentOpen = null;
function toggleFAQ(id) {
    // const faq = document.getElementById(`faq${id}`);
    // const icon = document.getElementById(`icon${id}`);
    // faq.classList.toggle("hidden");
    // icon.textContent = faq.classList.contains("hidden") ? "👉" : "👇";

        const faq = document.getElementById(`faq${id}`);
        const icon = document.getElementById(`icon${id}`);
        
        if (currentOpen) {
            const prevFaq = document.getElementById(currentOpen);
            const prevIcon = document.getElementById("icon" + currentOpen.replace("faq", ""));
            prevFaq.classList.add("hidden");
            prevIcon.textContent = "👉";
        }
        
        if (currentOpen !== `faq${id}`) {
            faq.classList.remove("hidden");
            icon.textContent = "👇";
            currentOpen = `faq${id}`;
        } else {
            currentOpen = null;
        }
    }