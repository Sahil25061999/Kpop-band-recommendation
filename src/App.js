import { useState } from "react";

import "./styles.css";

const kpop = {
  boyGroup: [
    {
      name: "BTS",
      member: ["Jungkook", "V", "Park Ji-min", "Suga", "Jin", "RM", "J-Hope"]
    },
    {
      name: "EXO",
      member: [
        "Kai",
        "Baekhyun",
        "D.O",
        "Chanyeol",
        "Sehun",
        "Chen",
        "Suho",
        "Lay",
        "Xiumin"
      ]
    }
  ],
  girlGroup: [
    {
      name: "Blackpink",
      member: ["Jennie", "Lisa", "Jisoo", "Rosē"]
    },
    {
      name: "Twice",
      member: [
        "Jihyo",
        "Nayeon",
        "Jeongyeon",
        "Chaeyoung",
        "Sana",
        "Tzuyu",
        "Momo",
        "Dahyun",
        "Mina"
      ]
    }
  ],
  bands: [
    {
      name: "Buzz",
      member: [
        "Min Kyung Hoon",
        "Son Seong-hee",
        "Yoon Woo Hyun",
        "Shin Jun-ki",
        "Kim Ye-jun",
        "Min Dae-hong"
      ]
    }
  ]
};

export default function App() {
  const [group, setGroup] = useState("boyGroup");

  function handleGroup(option) {
    setGroup(option);
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">kpop music🎵</h1>
        <p className="desc">Check the top groups in kpop.</p>
        {Object.keys(kpop).map((option) => {
          return (
            <button className="btn" onClick={() => handleGroup(option)}>
              {option}
            </button>
          );
        })}
      </div>

      <div>
        {kpop[group].map((item) => {
          return (
            <div className="container container-grp" key={item.name}>
              <div className="group-name">
                <h2>{item.name}</h2>
              </div>
              <div className="group-members">
                {item.member.map((members) => (
                  <span className="member">{members},</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
