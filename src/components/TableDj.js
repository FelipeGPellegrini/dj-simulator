import "./TableDj.css";

// Áudios

//bases
import base1 from "../assets/base1.mp3";
import base2 from "../assets/base2.mp3";

//adlibs

import ah from "../assets/ah.mp3";
import bitch from "../assets/bitch.mp3";
import boy from "../assets/boy.mp3";
import gemido from "../assets/gemido.mp3";
import hahahahaborges from "../assets/hahahahaborges.mp3";
import letsgo from "../assets/letsgo.mp3";
import okay from "../assets/okay.mp3";
import plug from "../assets/plug.mp3";
import receba from "../assets/receba.mp3";

const TableDj = () => {
  const audiobase1 = new Audio(base1);
  const audiobase2 = new Audio(base2);
  const audioah = new Audio(ah);
  const audiobitch = new Audio(bitch);
  const audioboy = new Audio(boy);
  const audiogemido = new Audio(gemido);
  const audiohahahahaborges = new Audio(hahahahaborges);
  const audioletsgo = new Audio(letsgo);
  const audiookay = new Audio(okay);
  const audioplug = new Audio(plug);
  const audioreceba = new Audio(receba);
  return (
    <div id="container">
      <div id="containerLineCircle">
        <div
          className="circleDj"
          onClick={() => {
            audiobase1.play();
          }}
        >
          <p>BASE 1</p>
        </div>
        <div
          className="circleDj"
          onClick={() => {
            audiobase1.pause();
            audiobase1.currentTime = 0;
            audiobase2.pause();
            audiobase2.currentTime = 0;
          }}
        >
          <p>STOP</p>
        </div>
        <div
          className="circleDj"
          onClick={() => {
            audiobase2.play();
            audiobitch.currentTime = 0;
          }}
        >
          <p>BASE 2</p>
        </div>
      </div>
      <div id="containerFirstLineSquare">
        <div
          className="squareDj colorBlue"
          onClick={() => {
            audioah.play();
            audioah.currentTime = 0;
          }}
        ></div>
        <div
          className="squareDj colorStandard"
          onClick={() => {
            audiobitch.play();
            audiobitch.currentTime = 0;
          }}
        ></div>
        <div
          className="squareDj colorOrange"
          onClick={() => {
            audioboy.play();
            audioboy.currentTime = 0;
          }}
        ></div>
      </div>
      <div id="containerSecondLineSquare">
        <div
          className="squareDj colorYellow"
          onClick={() => {
            audiogemido.play();
            audiogemido.currentTime = 0;
          }}
        ></div>
        <div
          className="squareDj colorRed"
          onClick={() => {
            audiohahahahaborges.play();
            audiohahahahaborges.currentTime = 0;
          }}
        ></div>
        <div
          className="squareDj colorBlue"
          onClick={() => {
            audioletsgo.play();
            audioletsgo.currentTime = 0;
          }}
        ></div>
      </div>
      <div id="containerThirdLineSquare">
        <div
          className="squareDj colorStandard"
          onClick={() => {
            audiookay.play();
            audiookay.currentTime = 0;
          }}
        ></div>
        <div
          className="squareDj colorBlue"
          onClick={() => {
            audioplug.play();
            audioplug.currentTime = 0;
          }}
        ></div>
        <div
          className="squareDj colorRed"
          onClick={() => {
            audioreceba.play();
            audioreceba.currentTime = 0;
          }}
        ></div>
      </div>
    </div>
  );
};

export default TableDj;
