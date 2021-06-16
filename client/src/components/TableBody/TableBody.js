import React, { useState, useEffect } from "react";
import moment from "moment";
import "./index.css";

function TableBody(props) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 992);
  const [isMobile, setMobile] = useState(window.innerWidth < 768);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 992);
    setMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <tr>
      <td className="date">{moment(props.song.updated_date).format("YYYY-MM-DD")}</td>
      <td>{props.song.artist}</td>
      <td><a href={props.song.download} target="_blank">{props.song.song_name}</a></td>
      <td>{props.song.source ? props.song.source : ""}</td>
      {isDesktop &&
        <>
          <td className="date">{moment(props.song.release_date).format("YYYY-MM-DD")}</td>
          <td>{props.song.multitrack}</td>
        </>
      }
      {!isMobile &&
        <>
          <td>{props.song.g}</td>
          <td>{props.song.b}</td>
          <td>{props.song.d}</td>
          <td>{props.song.k}</td>
          <td>{props.song.v}</td>
        </>
      }
      <td value={props.song.video} onClick={props.openModal} name={props.song.song_name} artist={props.song.artist}>
        <i className="fa fa-youtube-play fa-2x" value={props.song.video} onClick={props.openModal} name={props.song.song_name} artist={props.song.artist}></i>
      </td>
    </tr>
  )
}

export default TableBody;
