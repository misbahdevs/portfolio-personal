import React, { Component, createContext } from "react";
import avtr from "../../assets/img/icons/orang.jpg";
import avtr2 from "../../assets/img/icons/orang2.jpg";
import avtr3 from "../../assets/img/icons/orang3.jpg";
import avtr4 from "../../assets/img/icons/orang4.jpg";

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
            jurusan: "Teknik Komputer dan Jaringan",
            institusi: "SMK Negeri 1 Cijulang",
            rangeWaktu: "2018 - 2021",
          },
          {
            jurusan: "Teknik Informatika",
            institusi: "Sekolah Tinggi Teknologi Bandung",
            rangeWaktu: "2021 - 2025",
          },
        ],
        educationNonFormal: [
          {
            jurusan: "Junior Web Developer",
            institusi: "Progate",
            rangeWaktu: "Juni 2021 - Agustus 2021",
          },
          {
            jurusan: "Junior Pentesting",
            institusi: "Haxor Security",
            rangeWaktu: "Juni 2021 - Agustus 2021",
          },
        ],
        work: [
          {
            jurusan: "Web Developer",
            institusi: "CV Sundajaya Corp",
            rangeWaktu: "Maret 2022 - Mei 2022",
          },
          {
            jurusan: "Web Developer",
            institusi: "Kominfo NTB",
            rangeWaktu: "Juli 2022 - Agustus 2022",
          },
          {
            jurusan: "Backup Frontend Developer",
            institusi: "Telkom University",
            rangeWaktu: "Seftember 2022 - Now",
          },
        ],
      },
      chooseQualification: [
        {
          jurusan: "Teknik Komputer dan Jaringan",
          jurusan: "SMK Negeri 1 Cijulang",
          rangeWaktu: "2018 - 2021",
        },
        {
          jurusan: "Teknik Informatika",
          jurusan: "Sekolah Tinggi Teknologi Bandung",
          rangeWaktu: "2021 - 2025",
        },
      ],
      dataTestimoni: [
        {
          avatar: avtr,
          name: "Arshaka",
          profession: "UI/UX Designer",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto magni velit consequuntur, reprehenderit ducimus facilis libero quas voluptate harum ea dicta laudantium nulla tempore distinctio.",
        },
        {
          avatar: avtr2,
          name: "Yoga",
          profession: "Founder CV Sunda Jaya Corp",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto magni velit consequuntur, reprehenderit ducimus facilis libero quas voluptate harum ea dicta laudantium nulla tempore distinctio.",
        },
        {
          avatar: avtr3,
          name: "Pandi",
          profession: "Staf Kominfo NTB",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto magni velit consequuntur, reprehenderit ducimus facilis libero quas voluptate harum ea dicta laudantium nulla tempore distinctio.",
        },
        {
          avatar: avtr4,
          name: "Abang",
          profession: "PIC Telkom University",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto magni velit consequuntur, reprehenderit ducimus facilis libero quas voluptate harum ea dicta laudantium nulla tempore distinctio.",
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
