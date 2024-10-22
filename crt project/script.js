setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();

    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;

    document.getElementById('hour').style.transform = `rotate(${hrotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mrotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${srotation}deg)`;

    const formattedHours = htime.toString().padStart(2, '0');
    const formattedMinutes = mtime.toString().padStart(2, '0');
    const formattedSeconds = stime.toString().padStart(2, '0');
    document.getElementById('digitalClock').innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    document.getElementById('dateDisplay').innerHTML = `${year}-${month}-${day}`;
}, 1000);
