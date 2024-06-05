function toggleMore() {
    var moreContent = document.querySelector('.more-content');
    var readMore = document.querySelector('.read-more');
    
    if (moreContent.style.display === 'none') {
      moreContent.style.display = 'block';
      readMore.textContent = 'Read Less';
    } else {
      moreContent.style.display = 'none';
      readMore.textContent = 'Read More';
    }
  }