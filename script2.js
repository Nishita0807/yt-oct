const API_KEY='AIzaSyDBm14pdp5RU6BcqcIavxIs4gvpbZHJwxk';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Function to fetch video details and render them on the video details page
async function fetchAndRenderVideoDetails(videoId) {
    try {
        const response = await fetch(`${BASE_URL}/videos?key=${API_KEY}&part=snippet,statistics&id=${videoId}`);
        if (!response.ok) {
            throw new Error(`Error fetching video details: ${response.status}`);
        }
        const data = await response.json();
        const videoPlayer = document.getElementById('videoPlayer');
        const videoStatistics = document.getElementById('videoStatistics');
        const iframeWidth = window.innerWidth <= 789 ? 370 : 640;
        const iframeHeight = window.innerHeight <= 789 ? 300 : 360;

        videoPlayer.innerHTML = `
            <iframe width="${iframeWidth}" height="${iframeHeight}" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allowfullscreen></iframe>
        `;
        videoStatistics.innerHTML = `
     
            <div>${data.items[0].snippet.title}</div>
            <div class="all-icons">
                <div>${data.items[0].statistics.viewCount} views . Oct 8, 2021</div>
                <div class="sharing">
      <div class="share">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path d="M15.77 7H11.54L13.06 2.06C13.38 1.03 12.54 0 11.38 0C10.8 0 10.24 0.24 9.86 0.65L4 7H0V17H4H5H14.43C15.49 17 16.41 16.33 16.62 15.39L17.96 9.39C18.23 8.15 17.18 7 15.77 7ZM4 16H1V8H4V16ZM16.98 9.17L15.64 15.17C15.54 15.65 15.03 16 14.43 16H5V7.39L10.6 1.33C10.79 1.12 11.08 1 11.38 1C11.64 1 11.88 1.11 12.01 1.3C12.08 1.4 12.16 1.56 12.1 1.77L10.58 6.71L10.18 8H11.53H15.76C16.17 8 16.56 8.17 16.79 8.46C16.92 8.61 17.05 8.86 16.98 9.17Z" fill="white"/>
          </svg></div>
        <div>${data.items[0].statistics.likeCount}</div>
      </div>
      <div class="share">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path d="M14.0001 0H13.0001H3.57007C2.50007 0 1.59007 0.67 1.38007 1.61L0.040068 7.61C-0.229932 8.85 0.820068 10 2.23007 10H6.46007L4.94007 14.94C4.62007 15.97 5.46007 17 6.62007 17C7.20007 17 7.76007 16.76 8.14007 16.35L14.0001 10H18.0001V0H14.0001ZM7.40007 15.67C7.21007 15.88 6.92007 16 6.62007 16C6.36007 16 6.12007 15.89 5.99007 15.7C5.92007 15.6 5.84007 15.44 5.90007 15.23L7.42007 10.29L7.82007 9H6.46007H2.23007C1.82007 9 1.43007 8.83 1.20007 8.54C1.08007 8.39 0.950068 8.14 1.02007 7.82L2.36007 1.82C2.46007 1.35 2.97007 1 3.57007 1H13.0001V9.61L7.40007 15.67ZM17.0001 9H14.0001V1H17.0001V9Z" fill="white"/>
          </svg></div>
        <div>632</div>
      </div>
      <div class="share">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path d="M13 2.63L18.66 9L13 15.37V12V11H12C8.04 11 4.86 12 2.25 14.09C4.09 10.02 7.36 7.69 12.14 6.99L13 6.86V6V2.63ZM12 0V6C4.22 7.13 1.11 12.33 0 18C2.78 14.03 6.44 12 12 12V18L20 9L12 0Z" fill="white"/>
          </svg></div>
          <div>SHARE</div>
      </div>
      <div class="share">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
            <path d="M20 6H16V10H14V6H10V4H14V0H16V4H20V6ZM12 0H0V1H12V0ZM0 5H8V4H0V5ZM0 9H8V8H0V9Z" fill="white"/>
          </svg></div>
          <div>SAVE</div>
      </div>
      <div class="share">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
            <path d="M3.5 2C3.5 2.83 2.83 3.5 2 3.5C1.17 3.5 0.5 2.83 0.5 2C0.5 1.17 1.17 0.5 2 0.5C2.83 0.5 3.5 1.17 3.5 2ZM8 0.5C7.17 0.5 6.5 1.17 6.5 2C6.5 2.83 7.17 3.5 8 3.5C8.83 3.5 9.5 2.83 9.5 2C9.5 1.17 8.83 0.5 8 0.5ZM14 0.5C13.17 0.5 12.5 1.17 12.5 2C12.5 2.83 13.17 3.5 14 3.5C14.83 3.5 15.5 2.83 15.5 2C15.5 1.17 14.83 0.5 14 0.5Z" fill="white"/>
          </svg></div>
      </div>
                </div>
            </div>
            <div class="profile">
                <div class="channel">
                    <div class="channel-logo">
                        <div></div>
                        <div>
                            <div>Marcus Levin</div>
                            <div>1.2M subscribers</div>
                        </div>
                    </div>
                    <div>SUBSCRIBE</div>
                </div>
                <div class="channel-desc">
<div>                    Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country.
</div>                    
<div>SHOW MORE</div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('An error occurred while fetching video details:', error);
    }
}

// Get video_id from the URL query parameter
const params = new URLSearchParams(window.location.search);
const videoId = params.get('videoId');

// Initialize the page with video details
async function fetchVideoComments(videoId) {
    try {
        const response = await fetch(`${BASE_URL}/commentThreads?key=${API_KEY}&part=snippet&videoId=${videoId}`);
        if (!response.ok) {
            throw new Error(`Error fetching video comments: ${response.status}`);
        }
        const data = await response.json();
        const comments = data.items;
        renderComments(comments);
    } catch (error) {
        console.error('An error occurred while fetching video comments:', error);
    }
}

// Function to render comments and replies
// Function to render comments and replies
function renderComments(comments) {
    const videoComments = document.getElementById('videoComments');
    videoComments.innerHTML = '';

    comments.forEach(comment => {
        const commentText = comment.snippet.topLevelComment.snippet.textDisplay;
        const limitedCommentText = commentText.length <= 50 ? commentText : commentText.slice(0, 47) + '...';
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
        
            <div class="icon4"></div>
            <div>
                <div>James Gouse <span style="color:gray;">8 hours ago</span></div>
                <div>${limitedCommentText} </div>
                <div class="reply-icon">
                    <div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M10.5133 5.33335H7.69333L8.70667 2.04002C8.92 1.35335 8.36 0.666687 7.58667 0.666687C7.2 0.666687 6.82667 0.826687 6.57333 1.10002L2.66667 5.33335H0V12H2.66667H3.33333H9.62C10.3267 12 10.94 11.5534 11.08 10.9267L11.9733 6.92669C12.1533 6.10002 11.4533 5.33335 10.5133 5.33335ZM2.66667 11.3334H0.666667V6.00002H2.66667V11.3334ZM11.32 6.78002L10.4267 10.78C10.36 11.1 10.02 11.3334 9.62 11.3334H3.33333V5.59335L7.06667 1.55335C7.19333 1.41335 7.38667 1.33335 7.58667 1.33335C7.76 1.33335 7.92 1.40669 8.00667 1.53335C8.05333 1.60002 8.10667 1.70669 8.06667 1.84669L7.05333 5.14002L6.78667 6.00002H7.68667H10.5067C10.78 6.00002 11.04 6.11335 11.1933 6.30669C11.28 6.40669 11.3667 6.57335 11.32 6.78002Z" fill="white"/>
                            </svg>
                        </div>
                        <div>3</div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M9.33354 0.666687H8.66687H2.38021C1.66687 0.666687 1.06021 1.11335 0.920208 1.74002L0.0268747 5.74002C-0.153125 6.56669 0.546875 7.33335 1.48687 7.33335H4.30688L3.29354 10.6267C3.08021 11.3134 3.64021 12 4.41354 12C4.80021 12 5.17354 11.84 5.42688 11.5667L9.33354 7.33335H12.0002V0.666687H9.33354ZM4.93354 11.1134C4.80687 11.2534 4.61354 11.3334 4.41354 11.3334C4.24021 11.3334 4.08021 11.26 3.99354 11.1334C3.94687 11.0667 3.89354 10.96 3.93354 10.82L4.94688 7.52669L5.21354 6.66669H4.30688H1.48687C1.21354 6.66669 0.953541 6.55335 0.800208 6.36002C0.720208 6.26002 0.633541 6.09335 0.680208 5.88002L1.57354 1.88002C1.64021 1.56669 1.98021 1.33335 2.38021 1.33335H8.66687V7.07335L4.93354 11.1134ZM11.3335 6.66669H9.33354V1.33335H11.3335V6.66669Z" fill="white"/>
                        </svg>
                    </div>
                    <div id="reply-button">REPLY</div>
                </div>
            </div>
        `;

        // Instead of creating a separate button, you can add a click event listener to the "REPLY" div
        const replyDiv = commentElement.querySelector('#reply-button');
        replyDiv.addEventListener('click', () => {
            showReplies(commentElement, comment);
        });

        videoComments.appendChild(commentElement);
    });
}

async function showReplies(commentElement, comment) {
    const commentId = comment.id; // Assuming comment has an 'id' property
    const showRepliesContainer = document.createElement('div');
    showRepliesContainer.className = 'replies';

    // You can fetch and load the actual replies here as needed
    // For now, I'll create a placeholder message
    const replyElement = document.createElement('div');
    replyElement.className = 'comment reply';

    // You should have access to comment.totalReplyCount and reply.snippet.textDisplay
    if (comment.totalReplyCount > 0) {
        // If there are replies, show them
        replyElement.innerHTML = `
            <p>Reply to: ${reply.snippet.textDisplay}</p>
            <p>Actual replies go here...</p>
        `;
    } else {
        // If there are no replies, display "No replies found"
        replyElement.innerHTML = `
            <p>No replies found</p>
        `;
    }

    showRepliesContainer.appendChild(replyElement);

    // Insert the replies container just above the clicked comment
    commentElement.parentElement.insertBefore(showRepliesContainer, commentElement);
}



// Function to load and render replies (simulated)
async function loadAndRenderReplies(commentId, commentElement) {
    try {
        const response = await fetch(`${BASE_URL}/comments?key=${API_KEY}&part=snippet&parentId=${commentId}`);
        if (!response.ok) {
            throw new Error(`Error fetching comment replies: ${response.status}`);
        }
        const data = await response.json();
        const replies = data.items;
        renderReplies(replies, commentElement);
    } catch (error) {
        console.error('An error occurred while fetching comment replies:', error);
    }
}


function renderReplies(replies, commentElement) {
    const replyContainer = document.createElement('div');
    replyContainer.className = 'replies';

    replies.forEach(reply => {
        const replyElement = document.createElement('div');
        replyElement.className = 'comment reply';
        replyElement.innerHTML = `
            <p>${reply.snippet.textDisplay}</p>
        `;
        replyContainer.appendChild(replyElement);
    });

    commentElement.appendChild(replyContainer);
}

// Event listener for adding comments
const commentInput = document.getElementById('commentInput');
commentInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) { // Check for Enter key press without Shift
        event.preventDefault(); // Prevent the default behavior (form submission)
        const commentText = commentInput.value.trim();
        if (commentText) {
            addCommentToVideoComments(commentText);
            commentInput.value = '';
        }
    }
});

function addCommentToVideoComments(commentText, commentId) {
    const videoComments = document.getElementById('videoComments');

    // Create a new comment element
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerHTML = `
    <div class="icon4"></div>
    <div>
        <div>James Gouse <span style="color:gray;">8 hours ago</span></div>
        <div>${commentText} </div>
        <div class="reply-icon">
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10.5133 5.33335H7.69333L8.70667 2.04002C8.92 1.35335 8.36 0.666687 7.58667 0.666687C7.2 0.666687 6.82667 0.826687 6.57333 1.10002L2.66667 5.33335H0V12H2.66667H3.33333H9.62C10.3267 12 10.94 11.5534 11.08 10.9267L11.9733 6.92669C12.1533 6.10002 11.4533 5.33335 10.5133 5.33335ZM2.66667 11.3334H0.666667V6.00002H2.66667V11.3334ZM11.32 6.78002L10.4267 10.78C10.36 11.1 10.02 11.3334 9.62 11.3334H3.33333V5.59335L7.06667 1.55335C7.19333 1.41335 7.38667 1.33335 7.58667 1.33335C7.76 1.33335 7.92 1.40669 8.00667 1.53335C8.05333 1.60002 8.10667 1.70669 8.06667 1.84669L7.05333 5.14002L6.78667 6.00002H7.68667H10.5067C10.78 6.00002 11.04 6.11335 11.1933 6.30669C11.28 6.40669 11.3667 6.57335 11.32 6.78002Z" fill="white"/>
                    </svg>
                </div>
                <div>3</div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M9.33354 0.666687H8.66687H2.38021C1.66687 0.666687 1.06021 1.11335 0.920208 1.74002L0.0268747 5.74002C-0.153125 6.56669 0.546875 7.33335 1.48687 7.33335H4.30688L3.29354 10.6267C3.08021 11.3134 3.64021 12 4.41354 12C4.80021 12 5.17354 11.84 5.42688 11.5667L9.33354 7.33335H12.0002V0.666687H9.33354ZM4.93354 11.1134C4.80687 11.2534 4.61354 11.3334 4.41354 11.3334C4.24021 11.3334 4.08021 11.26 3.99354 11.1334C3.94687 11.0667 3.89354 10.96 3.93354 10.82L4.94688 7.52669L5.21354 6.66669H4.30688H1.48687C1.21354 6.66669 0.953541 6.55335 0.800208 6.36002C0.720208 6.26002 0.633541 6.09335 0.680208 5.88002L1.57354 1.88002C1.64021 1.56669 1.98021 1.33335 2.38021 1.33335H8.66687V7.07335L4.93354 11.1134ZM11.3335 6.66669H9.33354V1.33335H11.3335V6.66669Z" fill="white"/>
                </svg>
            </div>
            <div id="reply-button">REPLY</div>
        </div>
    </div>
    `;

    const replyDiv = commentElement.querySelector('#reply-button');
    replyDiv.addEventListener('click', () => {
        showReplies(commentElement, commentText);
    });


    // Append the comment to the videoComments
    if (videoComments.firstChild) {
        videoComments.insertBefore(commentElement, videoComments.firstChild);
    } else {
        videoComments.appendChild(commentElement);
    }
}



// Function to add a comment (simulated)
function addComment(videoId, commentText) {
    // Simulate storing comments in local storage (you would typically send this data to a server)
    const storedComments = JSON.parse(localStorage.getItem(videoId)) || [];
    const newComment = {
        text: commentText,
        timestamp: new Date().toISOString(),
    };
    storedComments.push(newComment);
    localStorage.setItem(videoId, JSON.stringify(storedComments));
}


// Initialize the page with video details and comments



// Find the video element
// related video container
// Add this code to your existing JavaScript

// Function to fetch and render related videos
// Function to fetch and render related videos
async function fetchAndRenderRelatedVideos() {
    try {
        const response = await fetch(`${BASE_URL}/search?key=${API_KEY}&part=snippet&type=video&maxResults=20`);
        if (!response.ok) {
            throw new Error(`Error fetching related videos: ${response.status}`);
        }
        const data = await response.json();
        const relatedVideos = data.items;

        const relatedVideosContainer = document.getElementById('relatedVideos');
        relatedVideosContainer.innerHTML = '';

        // Fetch and render details for each related video
        for (const video of relatedVideos) {
            const videoDetails = await fetchVideoDetails(video.id.videoId);

            const videoElement = document.createElement('div');
            videoElement.className = 'others-video';

            const videoThumbnail = video.snippet.thumbnails.medium.url;
            const videoTitle = video.snippet.title;
            const videoChannel = video.snippet.channelTitle;
            const videoViews = videoDetails.statistics.viewCount;
            const videoUploadDate = '3 years ago'; // You can fetch this from the API
            const videoDuration = '23:45'; // You can fetch this from the API

            videoElement.innerHTML = `
                
                    <div style=" width: 168px;
                    height: 94px;
                    background: lightgray url('${videoThumbnail}') 50% / cover no-repeat;"><div>${videoDuration}</div></div>
               
                <div>
                    <div>${videoTitle}</div>
                    <div>${videoChannel}</div>
                    <div>${videoViews} views . ${videoUploadDate}</div>
                </div>
            `;

            videoElement.addEventListener('click', () => {
                // Handle clicking on a related video to open it
                window.location.href = `index2.html?videoId=${video.id.videoId}`;
            });

            relatedVideosContainer.appendChild(videoElement);
        }
    } catch (error) {
        console.error('An error occurred while fetching related videos:', error);
    }
}

// Function to fetch video details
async function fetchVideoDetails(videoId) {
    try {
        const response = await fetch(`${BASE_URL}/videos?key=${API_KEY}&part=snippet,statistics&id=${videoId}`);
        if (!response.ok) {
            throw new Error(`Error fetching video details: ${response.status}`);
        }
        const data = await response.json();
        return data.items[0];
    } catch (error) {
        console.error('An error occurred while fetching video details:', error);
        return null;
    }
}

// Call the function to fetch and render related videos
fetchAndRenderRelatedVideos();


// Call the function to fetch and render related videos
fetchAndRenderVideoDetails(videoId);
fetchVideoComments(videoId);

