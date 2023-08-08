import React, { Component, createContext } from "react";
import {
  default as avtr,
  default as avtr2,
} from "../../assets/img/icons/user.png";
// import avtr3 from "../../assets/img/icons/orang3.jpg";
// import avtr4 from "../../assets/img/icons/orang4.jpg";
import gambar1 from "../../assets/img/1.PNG";
import gambar2 from "../../assets/img/2.PNG";
// import gambar3 from "../../assets/img/3.PNG";

// bikin context
const rootContext = createContext();

// bikin Provider
const Provider = rootContext.Provider;

const GlobalProvider = (ChildrenComp) => {
  return class ParentComp extends Component {
    state = {
      qualification: {
        educationFormal: [
          {
            jurusan: "Teknik Informatika",
            institusi: "Sekolah Tinggi Teknologi Bandung",
            rangeWaktu: "2021 - 2025",
          },
          {
            jurusan: "Teknik Komputer dan Jaringan",
            institusi: "SMK Negeri 1 Cijulang",
            rangeWaktu: "2018 - 2021",
          },
        ],
        educationNonFormal: [
          {
            jurusan: "Junior Web Developer",
            institusi: "Progate",
            rangeWaktu: "June 2021 - August 2021",
          },
          {
            jurusan: "Junior Pentesting",
            institusi: "Haxor Security",
            rangeWaktu: "June 2021 - August 2021",
          },
        ],
        work: [
          {
            jurusan: "Backup Frontend Developer",
            institusi: "Telkom University",
            rangeWaktu: "September 2022 - Now",
          },
          {
            jurusan: "Frontend Developer",
            institusi: "Felix Wibowo Design Interior",
            rangeWaktu: "March 2022 - Now",
          },
          {
            jurusan: "Web Developer",
            institusi: "CV Sundajaya Corp",
            rangeWaktu: "March 2022 - May 2022",
          },
          {
            jurusan: "Network Technician",
            institusi: "CV Magaze Wira Pratama Mutual Sinergi Infinite",
            rangeWaktu: "September 2020 - December 2020",
          },
        ],
      },
      chooseQualification: [
        {
          jurusan: "Teknik Informatika",
          institusi: "Sekolah Tinggi Teknologi Bandung",
          rangeWaktu: "2021 - 2025",
        },
        {
          jurusan: "Teknik Komputer dan Jaringan",
          institusi: "SMK Negeri 1 Cijulang",
          rangeWaktu: "2018 - 2021",
        },
      ],
      dataTestimoni: [
        {
          avatar: avtr,
          name: "Arshaka",
          profession: "UI/UX Designer",
          review:
            "Collaborating with Misbah is very pleasant. He is fast and professional in completing projects, as well as providing useful input. The website created by Misbah is very good and has a fast loading speed. We recommend Misbah for any web project.",
        },
        {
          avatar: avtr2,
          name: "Yoga",
          profession: "Manajer CV Sunda Jaya Corp",
          review:
            "I am very happy with my cooperation with Misbah. He is very professional and responsive in handling change requests on our website. He also always provides innovative and creative solutions to the problems we face. We highly recommend Misbah for your next web project.",
        },
      ],
      dataPortfolio: [
        {
          image: gambar1,
          title: "Website Design Interior",
          githubUrl: "https://github.com/misbahdevs/",
          demoUrl: "https://designlix.netlify.app/",
        },
        {
          image: gambar2,
          title: "CV Sunda Jaya Corp Website",
          githubUrl: "https://github.com/misbahdevs/",
          demoUrl: "https://sundajayacorp.com/",
        },
      ],
    };

    dispatch = (action) => {
      if (action.type === "get_qualification-formal") {
        return this.setState({
          chooseQualification: this.state.qualification.educationFormal,
        });
      } else if (action.type === "get_qualification-nonformal") {
        return this.setState({
          chooseQualification: this.state.qualification.educationNonFormal,
        });
      } else if (action.type === "get_work") {
        return this.setState({
          chooseQualification: this.state.qualification.work,
        });
      }
    };

    render() {
      return (
        <Provider value={{ state: this.state, dispatch: this.dispatch }}>
          <ChildrenComp {...this.props} />
        </Provider>
      );
    }
  };
};

export default GlobalProvider;

// Global Consumer
const Consumer = rootContext.Consumer;

export const GlobalConsumer = (ChildrenComp) => {
  return class ParentComp extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <ChildrenComp {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};
