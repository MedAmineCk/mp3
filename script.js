function generateIframe() {
  // Get the YouTube URL from the input
  var youtubeUrl = document.getElementById('youtubeUrlInput').value;

  // Create an iframe element
  var iframe = document.createElement('iframe');
  iframe.id = 'hphp';
  iframe.style.border = 'none';
  iframe.width = '100%';
  iframe.height = '750';

  // Construct the URL for the iframe
  var apiUrl = 'https://apiyoutube.cc/?url=' + encodeURIComponent(youtubeUrl) + '&color=3b6c96';
  iframe.src = apiUrl;

  // Clear previous iframe content
  document.getElementById('iframeContainer').innerHTML = '';

  // Append the iframe to the container
  document.getElementById('iframeContainer').appendChild(iframe);
}