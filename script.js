fetch("data.json")
.then(response => response.json())
.then(data => {
    const btnElements = document.querySelectorAll(".time-link");
    const handleBtnClick = (event) => {
        const period = event.target.dataset.period;

        const timeSpan = document.querySelectorAll(".time");

        switch (period) {
            case "daily":
                timeSpan.forEach((span) => span.innerHTML = 'Yesterday');
                document.getElementById("hrs-work").innerHTML = data[0].timeframes.daily.current;
                document.getElementById("prev-work").innerHTML = data[0].timeframes.daily.previous;
                document.getElementById("hrs-play").innerHTML = data[1].timeframes.daily.current;
                document.getElementById("prev-play").innerHTML = data[1].timeframes.daily.previous;
                document.getElementById("hrs-study").innerHTML = data[2].timeframes.daily.current;
                document.getElementById("prev-study").innerHTML = data[2].timeframes.daily.previous;
                document.getElementById("hrs-exercise").innerHTML = data[3].timeframes.daily.current;
                document.getElementById("prev-exercise").innerHTML = data[3].timeframes.daily.previous;
                document.getElementById("hrs-social").innerHTML = data[4].timeframes.daily.current;
                document.getElementById("prev-social").innerHTML = data[4].timeframes.daily.previous;
                document.getElementById("hrs-selfcare").innerHTML = data[5].timeframes.daily.current;
                document.getElementById("prev-selfcare").innerHTML = data[5].timeframes.daily.previous;
                break;
            case "weekly":
                timeSpan.forEach((span) => span.innerHTML = 'Last Week');
                document.getElementById("hrs-work").innerHTML = data[0].timeframes.weekly.current;
                document.getElementById("prev-work").innerHTML = data[0].timeframes.weekly.previous;
                document.getElementById("hrs-play").innerHTML = data[1].timeframes.weekly.current;
                document.getElementById("prev-play").innerHTML = data[1].timeframes.weekly.previous;
                document.getElementById("hrs-study").innerHTML = data[2].timeframes.weekly.current;
                document.getElementById("prev-study").innerHTML = data[2].timeframes.weekly.previous;
                document.getElementById("hrs-exercise").innerHTML = data[3].timeframes.weekly.current;
                document.getElementById("prev-exercise").innerHTML = data[3].timeframes.weekly.previous;
                document.getElementById("hrs-social").innerHTML = data[4].timeframes.weekly.current;
                document.getElementById("prev-social").innerHTML = data[4].timeframes.weekly.previous;
                document.getElementById("hrs-selfcare").innerHTML = data[5].timeframes.weekly.current;
                document.getElementById("prev-selfcare").innerHTML = data[5].timeframes.weekly.previous;
                break;
            case "monthly":
                timeSpan.forEach((span) => span.innerHTML = 'Last Month');
                document.getElementById("hrs-work").innerHTML = data[0].timeframes.monthly.current;
                document.getElementById("prev-work").innerHTML = data[0].timeframes.monthly.previous;
                document.getElementById("hrs-play").innerHTML = data[1].timeframes.monthly.current;
                document.getElementById("prev-play").innerHTML = data[1].timeframes.monthly.previous;
                document.getElementById("hrs-study").innerHTML = data[2].timeframes.monthly.current;
                document.getElementById("prev-study").innerHTML = data[2].timeframes.monthly.previous;
                document.getElementById("hrs-exercise").innerHTML = data[3].timeframes.monthly.current;
                document.getElementById("prev-exercise").innerHTML = data[3].timeframes.monthly.previous;
                document.getElementById("hrs-social").innerHTML = data[4].timeframes.monthly.current;
                document.getElementById("prev-social").innerHTML = data[4].timeframes.monthly.previous;
                document.getElementById("hrs-selfcare").innerHTML = data[5].timeframes.monthly.current;
                document.getElementById("prev-selfcare").innerHTML = data[5].timeframes.monthly.previous;
                break;
        }
    }

    btnElements.forEach((btnElement) => {
        btnElement.addEventListener("click", handleBtnClick)
    })
});

