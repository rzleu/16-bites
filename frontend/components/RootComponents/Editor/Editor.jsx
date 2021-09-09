import React from 'react';
import editorOne from 'Images/editors-1.png';
import editorTwo from 'Images/editors-2.png';
import editorThree from 'Images/editors-3.png';
import editorFour from 'Images/editors-4.png';
import editorFive from 'Images/editors-5.png';
import editorSix from 'Images/editors-6.png';
import editorSeven from 'Images/editors-7.png';
import editorEight from 'Images/editors-8.png';

function Editor() {
  return (
    <div className='editor--view'>
      <img src={editorOne} alt='editor image one' />
      <img src={editorTwo} alt='editor image two' />
      <img src={editorThree} alt='editor image three' />
      <img src={editorFour} alt='editor image four' />
      <img src={editorFive} alt='editor image five' />
      <img src={editorSix} alt='editor image six' />
      <img src={editorSeven} alt='editor image seven' />
      <img src={editorEight} alt='editor image eight' />
    </div>
  );
}

export default Editor;
