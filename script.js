// In this simplified example, we're using a placeholder API key.
// const apiKey = 'YOUR_YOUTUBE_API_KEY';
// const maxResults = 20;

// Function to fetch videos and render them on the home page.
const API_KEY='AIzaSyDBm14pdp5RU6BcqcIavxIs4gvpbZHJwxk';
const BASE_URL='https://www.googleapis.com/youtube/v3';





// Function to fetch and render videos on the home page
// Function to fetch and render videos on the home page
async function fetchAndRenderVideos(searchQuery, maxResults) {
    try {
        const response = await fetch(`${BASE_URL}/search?key=${API_KEY}&q=${searchQuery}&maxResults=${maxResults}&part=snippet&type=video`);
        if (!response.ok) {
            throw new Error(`Error fetching videos: ${response.status}`);
        }
        const data = await response.json();
        const videoList = document.getElementById('videoList');
        videoList.innerHTML = '';

        // Helper function to fetch channel details including the logo
        async function getChannelDetails(channelId) {
            const channelResponse = await fetch(`${BASE_URL}/channels?key=${API_KEY}&part=snippet&id=${channelId}`);
            if (!channelResponse.ok) {
                throw Error(`Error fetching channel details: ${channelResponse.status}`);
            }
            const channelData = await channelResponse.json();
            return channelData.items[0].snippet;
        }

        // Helper function to format views
        function formatViews(views) {
            if (views >= 1e6) {
                return (views / 1e6).toFixed(1) + 'M'+'views';
            } else if (views >= 1e3) {
                return (views / 1e3).toFixed(1) + 'K'+'views';
            } else {
                return views.toString();
            }
        }

       // ...

data.items.forEach(async (item) => {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';

    // Calculate the time ago
    const publishedAt = item.snippet.publishedAt;
    const timeAgo = getTimeAgo(publishedAt);

    function getTimeAgo(publishedAt) {
        const currentDate = new Date();
        const publishedDate = new Date(publishedAt);
        const timeDifference = currentDate - publishedDate;

        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30.44); // Average days in a month
        const years = Math.floor(months / 12);

        if (years > 0) {
            return `${years} year${years > 1 ? 's' : ''} ago`;
        } else if (months > 0) {
            return `${months} month${months > 1 ? 's' : ''} ago`;
        } else if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
        }
    }

    // Fetch video details to get the view count
    const videoDetailsResponse = await fetch(`${BASE_URL}/videos?key=${API_KEY}&part=statistics&id=${item.id.videoId}`);
    if (videoDetailsResponse.ok) {
        const videoDetailsData = await videoDetailsResponse.json();
        const viewCount = videoDetailsData.items[0].statistics?.viewCount || 0; // Ensure viewCount is available

        const formattedViews = formatViews(viewCount);

        const channelDetails = await getChannelDetails(item.snippet.channelId);
        const channelLogo = channelDetails.thumbnails.default.url;
        const channelName = channelDetails.title;

        videoItem.innerHTML = `
            <a href="index2.html?videoId=${item.id.videoId}">
                <img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.title} style="margin-bottom:0px;">
            </a>
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:3px;background-color:#000000;color:white;">
                <img src="${channelLogo}" width="50px" height="50px" style="border-radius:50%;">
                <div style="display:flex;flex-direction:column;">
                    <div style="width: 204px;padding:3px;
                    text-align:left;
                    color: var(--White-Color, #FFF);
                    font-family: Roboto;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;">${item.snippet.title}</div>
                    <div style="color: var(--Gray-Color, #AAA);
                    font-family: Roboto;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;text-align:left;padding:3px;">${channelName}</div>
                    <div style="color: var(--Gray-Color, #AAA);
                    font-family: Roboto;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;text-align:left;padding:3px;">${formattedViews} • ${timeAgo}</div>
                    
                </div>
            </div>
        `;
        videoList.appendChild(videoItem);
    }
});

// Rest of your code...

    } catch (error) {
        console.error('An error occurred while fetching videos:', error);
    }
}

// Rest of your code...


// Add an event listener to the search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput.value;
    fetchAndRenderVideos(searchQuery, 20);
});

// Initialize the page with empty search
fetchAndRenderVideos('', 20);

function displaying() {
    const section1 = document.getElementById("section-1");
    const userSection = document.getElementById("user-section");

    if (window.innerWidth <= 767) {
        // For mobile screens
        section1.style.display="none";
       if(userSection.style.display === "block"){
        userSection.style.display="none";
       }    
       else{
        userSection.style.display = "block";
       }
    } else {
        // For laptop screens
        // Add your laptop-specific logic here
        if (section1.style.display === "none" || section1.style.display === "") {
            section1.style.display = "flex";
            userSection.style.display = "none";
        } else {
            section1.style.display = "none";
            userSection.style.display = "block";
        }
    }
}

