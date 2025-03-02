const date = new Date();
const day = date.toLocaleDateString("en-US", {
    weekday: "long",
});

const formattedDate = `${date.toLocaleString("en-US", {
    month: "long",
})} ${date.getDate()} ${date.getFullYear()}`;

document.getElementById("day").innerText = `${day},`;
document.getElementById("date").innerText = formattedDate;

// const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

let ampm;
if (hours >= 12) {
    ampm = "PM";
} else {
    ampm = "AM";
}

let convertedHours = hours % 12;
const time = `${convertedHours}:${minutes}:${seconds} ${ampm}`;
console.log(time);
