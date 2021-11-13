import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TimelineMax, TweenMax, Power1, Power4, Linear, CSSPlugin } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { isMobile } from "react-device-detect"; //is for mobile devices
import { workImagePath } from "../../utils/assetUtils";
/* eslint-disable no-console */
const plugins = [CSSPlugin];
console.log(plugins);

class PortfolioList extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.pageAmimation = this.pageAmimation.bind(this);
    this.HrithikRoshanTile = workImagePath("hrx-tile.jpg");
    this.NiharGoldTile = workImagePath("nihargold-tile.jpg");
    this.KateSpadeTile = workImagePath("katespade-tile.jpg");
    this.ThambbiTile = workImagePath("thambbi-tile-2.jpg");
    this.HeroTalkiesTile = workImagePath("herotalkies-tile.jpg");
    this.CocoSoulTile = workImagePath("cocosoul-tile.jpg");
    this.SussegadoCoffeeTile = workImagePath("sussegado-tile.jpg");
    this.RapidRupeeTile = workImagePath("rapidrupee-tile.jpg");
    this.GravityTile = workImagePath("gravity-tile.jpg");
    this.LifebuoyTile = workImagePath("lifebuoy-tile.jpg");
    this.SetwetTile = workImagePath("setwet-tile.jpg");
    this.NiharShantiTile = workImagePath("nihar-shanti-tile.png");
    this.Tlctile = workImagePath("tlc-tile.jpg");
    this.OzivaTile = workImagePath("oziva-tile.jpg");
    this.state = {
      data: [
        {
          _id: "0",
          color: "#fff",
          title: "Nihar Gold",
          subtitle: "Packaging Design",
          row: 0,
          route: "nihar-gold",
          tile: this.NiharGoldTile
        },
        {
          _id: "1",
          color: "#fff",
          title: "Coco Soul",
          subtitle: "Digital Content",
          row: 0,
          route: "cocosoul",
          tile: this.CocoSoulTile
        },

        {
          _id: "2",
          color: "#fff",
          title: "Thambbi",
          subtitle: "Branding & Communication Design",
          row: 1,
          route: "thambbi",
          tile: this.ThambbiTile
        },
        {
          _id: "3",
          color: "#fff",
          title: "Rapid Rupee",
          subtitle: "Brand Strategy & Communication",
          row: 1,
          route: "rapid-rupee",
          tile: this.RapidRupeeTile
        },
        {
          _id: "4",
          color: "#fff",
          title: "Sussegado",
          subtitle: "Product & Package Design",
          row: 2,
          route: "sussegado-coffee",
          tile: this.SussegadoCoffeeTile
        },
        {
          _id: "5",
          color: "#fff",
          title: "Nihar Shanti",
          subtitle: "Packaging Design",
          row: 2,
          route: "nihar-shanti",
          tile: this.NiharShantiTile
        },
        {
          _id: "5",
          color: "#fff",
          title: "Socranos Gravity",
          subtitle: "Strategy & Packaging Design",
          row: 3,
          route: "socranos-gravity",
          tile: this.GravityTile
        },
        {
          _id: "6",
          color: "#fff",
          title: "HERO Talkies",
          subtitle: "Brand Design",
          row: 3,
          route: "hero-talkies",
          tile: this.HeroTalkiesTile
        },
        {
          _id: "7",
          color: "#fff",
          title: "Kate Spade",
          subtitle: "Digital Audit",
          row: 4,
          route: "kate-spade",
          tile: this.KateSpadeTile
        },
        {
          _id: "8",
          color: "#fff",
          title: "Hrithik Roshan's",
          subtitle: "Graphic Novel",
          row: 4,
          route: "hrithik-roshan",
          tile: this.HrithikRoshanTile
        },
        {
          _id: "9",
          color: "#fff",
          title: "Setwet",
          subtitle: "Audit & Research",
          row: 5,
          route: "setwet",
          tile: this.SetwetTile
        },

        {
          _id: "9",
          color: "#fff",
          title: "Lifebuoy",
          subtitle: "Audit & Research",
          row: 5,
          route: "lifebuoy",
          tile: this.LifebuoyTile
        },

        {
          _id: "10",
          color: "#fff",
          title: "TLC",
          subtitle: "Research & Package Design",
          row: 6,
          route: "tlc",
          tile: this.Tlctile
        },
        {
          _id: "11",
          color: "#fff",
          title: "Oziva",
          subtitle: "Branding & Package Design",
          row: 6,
          route: "oziva",
          tile: this.OzivaTile
        }
      ]
    };
  }

  componentDidMount() {
    if (!isMobile) {
      //require('debug.addIndicators');
      this.ScrollMagic = require("scrollmagic");
      this.controller = new this.ScrollMagic.Controller();
      ScrollMagicPluginGsap(this.ScrollMagic, TweenMax, TimelineMax);
      this.pageAmimation();
    }
  }

  pageAmimation() {
    const data = this.state.data;
    const slidesWrapper = document.querySelectorAll(".work-wrapper-2");
    const finalData = this.groupBy(data, function(item) {
      return [item.row];
    });

    finalData.map((itemArr, idx) => {
      const animationType = new TimelineMax();
      const animationTypeTwo = new TimelineMax();

      animationTypeTwo.fromTo(
        `._block-${idx} .work-image`,
        1,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Linear.easeNone }
      );

      new this.ScrollMagic.Scene({
        triggerElement: `._block-${idx}`,
        triggerHook: 1,
        duration: "50%",
        reverse: true
      })
        .setTween(animationTypeTwo)
        .addTo(this.controller);
    });
  }

  arrayFromObject(obj) {
    const arr = [];
    for (let i in obj) {
      arr.push(obj[i]);
    }
    return arr;
  }

  groupBy(list, fn) {
    const groups = {};
    list.map(elem => {
      let group = JSON.stringify(fn(elem));
      if (group in groups) {
        groups[group].push(elem);
      } else {
        groups[group] = [elem];
      }
    });

    return this.arrayFromObject(groups);
  }

  render() {
    const data = this.state.data;
    const finalData = this.groupBy(data, function(item) {
      return [item.row];
    });
    return (
      <div className="col-md-8 col-lg-8 no-gutters">
        <div className="portfolio-list">
          {finalData.map((arr, i) => {
            const oddEvenClass = i % 2 ? "even" : "even";
            return (
              <div
                key={i}
                id={oddEvenClass + i}
                className={`row no-gutters work-wrapper-2 _block-${i} _wrap-${oddEvenClass}`}
                style={{ width: "100%" }}
              >
                {arr.map((item, idx) => {
                  return (
                    <Link
                      to={`/work/${item.route}`}
                      id={item.route}
                      className={`work-wrapper work-wrapper-${idx}`}
                      key={idx}
                    >
                      <div ref={this.workWrapper} className="work-image">
                        {item.tile && <img alt={item.tile} src={item.tile} />}
                      </div>
                      <div className="work-details">
                        <h5 className="sub-title">{item.subtitle}</h5>
                        <h4 className="title">{item.title}</h4>
                      </div>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PortfolioList;
