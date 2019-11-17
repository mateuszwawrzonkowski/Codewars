function humanReadable(seconds) {
  const hours = Math.floor(seconds/(60*60)) < 10 ? '0' + (Math.floor(seconds/(60*60))) : Math.floor(seconds/(60*60));
  const minutes = Math.floor(seconds/(60))%60 < 10 ? '0' + Math.floor(seconds/60)%60 : Math.floor(seconds/(60))%60;
  const sec = seconds%60 < 10 ? '0' + seconds%60 : seconds%60;
  
  return `${hours}:${minutes}:${sec}`
}