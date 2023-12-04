import { Component } from "react";

import ReadContent from "./components/ReadContent";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Creator from "./components/Creator";

import LCKLogo from "./img/LCK-Logo.png";
import LCKWelcome from "./img/lck-welcome.jpg";
import T1logo from "./img/T1-logo.png";
import GenGlogo from "./img/Geng-Logo.png";
import RolstersLogo from "./img/KT-logo.png";
import HLELogo from "./img/HLE-Logo.png";
import DplusLogo from "./img/dplus-Logo.png";
import DRXLogo from "./img/DRX-Logo.png";
import SANDBOXLogo from "./img/Liiv-Logo.png";
import BRIONLogo from "./img/Brion-Logo.png";
import NongshimLogo from "./img/Redforce-Logo.png";
import FreecsLogo from "./img/Freecs-Logo.png";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 10;
    this.state = {
      mode: "read", /* Page Content 에 대하여 ID 지정 및 사정 정의 */
      selected_content_id: 1,
      subject: { title: "League of Legends Champions Korea", sub: "최고의 플레이어들이 모이는 곳.", image: LCKLogo },
      welcome: { title: "환영합니다", desc: "전설을 만들어 갑니다, LCK \n WE MAKE LEGENDS", image: LCKWelcome },
      contents: [
        { id: 1, 
          title: "Gen.G", 
          desc: "창단 : 2013년 9월 7일 \n 모기업 : (주)케이에스브이이스포츠코리아 \n 소유주 : 케빈 추[Kevin] \n 어드바이저 : 크리스 박 [Chris] \n CEO : 아놀드 허[Arnold] \n 상무 : 이지훈[jihun] \n 감독 : 김정수[KIM] \n 코치 : 조세형[Mata] | 권영재[Helper] \n 주장 : 공석 \n \n 우승 경력 \n World Championship : 2회 (전신인 SAMSUNG GALAXY 시절) \n LCK : 4회 \n Intel Extreme Masters : 1회 \n LOL 마스터즈 : 1회", 
          image: GenGlogo },

        { id: 2, 
          title: "SKT T1", 
          desc: "창단 : 2012년 12월 13일 \n 모기업 : (주)에스케이텔레콤씨에스티원 \n CEO : Joe Marsh \n COO : 안웅기[Josh] \n 파트 오너 : 이상혁[Faker] \n\n 단장 : 정희윤 \n 감독 : 김정균[kkOma] \n 코치 : 임재현[Tom] | 김강희[Roach] \n 주장 : 이상혁[Faker] \n \n 우승 경력 \n World Championship : 4회 \n Mid-Summer Invitation : 2회 \n LCK : 10회 \n Intel Extreme Masters : 1회 \n Rift Rivals : 1회 \n All-Star : 1회 \n NLB : 1회", 
          image: T1logo },

        { id: 3, 
          title: "KT Rolster", 
          desc: "창단 : 2012년 10월 10일 \n 모기업 : KT스포츠 \n 대표 : 이창호 \n 단장 : 김상태 \n 디렉터 : 신기혁 \n 매니저 : 이원일 \n 감독 : 강동훈[Hirai] \n 코치 : 최승민[Supreme] | 김무성[Museong] | 임혜성 [Comet] \n 분석 : 이희원[Heetul] \n 주장 : 공석 \n \n 우승 경력 \n LCK : 2회 \n KeSPA Cup : 1회 \n Intel Extreme Masters : 1회 \n MLG : 1회", 
          image: RolstersLogo },

        { id: 4, 
          title: "Hanhwa Life Esports", 
          desc: "창단 : 2014년 11월 14일 \n 모기업 : 한화생명 \n 대표 : 여승주 \n 단장 : 김성훈 \n  스카우터 : 박세호[sayho] \n 감독 : 최인규[HiDanDy] \n 코치 : 이재하[Mowgli] \n 분석 : 김현식[Bibra] \n 주장 : 박도현[Viper] \n \n 우승 경력 \n LCK : 1회 \n KeSPA Cup : 1회 ", 
          image: HLELogo },

        { id: 5, 
          title: "Dplus KIA", 
          desc: "창단 : 2017년 5월 18일 \n 법인명 : (주)에이디이스포츠 \n 대표/단장 : 이유영[NO1] \n 부대표 : 이준영[BDP] \n 감독 : 이재민[Zefa] \n 코치 : 박준형[Bubbling] | 김상수[Ssong] \n 주장 : 허수[ShowMaker] \n \n 우승 경력 \n World Championship : 1회 \n LCK : 3회 \n Rift Rivals : 1회 \n Challengers Korea : 1회 (2부리그) \n KeSPA Cup : 1회 ", 
          image: DplusLogo },

        { id: 6, 
          title: "DRX", 
          desc: "창단 : 2012년 5월 7일 \n 법인명 : (주)디알엑스 \n 대표 : 최상인[DOwner] \n 부사장 : 한가람 \n 단장 : 공석 \n 사무국장 : 사재윤[Leo] \n 감독 : 김목경[Micro] \n 코치 : 김준서[Crush] \n 분석 : 김태영[Dasom] \n 주장 : 김광희[Rascal] \n \n 우승 경력 \n World Championship : 1회 \n LCK : 2회 \n Rift Rivals : 1회 \n Intel Extreme Masters : 1회", 
          image: DRXLogo },

        { id: 7, 
          title: "Liiv SANDBOX", 
          desc: "창단 : 2016년 12월 31일 \n 연고지 : 대한민국 부산광역시 \n 홈 경기장 : 부산 이스포츠 경기장 \n 모기업 : 4by4 \n 소유주 : 윤준호 \n CEO : 정인모[Ryan] \n 부사장 : 신지수[Gigi] \n 단장 : 김해찬[Harry] \n 총감독 : 박준석[Edo] \n 감독 : 유상욱[Ryu] \n 코치 : 김우섭[Seobi] | 최두성[Dooti] \n 분석 : 이영남[Yvon] \n 주장 : 공석 \n \n 우승 경력 \n 무관", 
          image: SANDBOXLogo },

        { id: 8, 
          title: "OKSavingsBank BRION", 
          desc: "창단 : 2012년 2월 14일 \n 모기업 : (주)브리온이스포츠 \n 소유주 : 임우택 \n 단장 : 박정석[Reach] \n 매니저 : 이지환[RecordKeepeR] \n 감독 : 최우범[Edgar] \n 코치 : 이승후[Drinker] \n 주장 : 공석 \n \n 우승 경력 \n LCK : 1회 \n Challenger Korea : 1회 (2부 리그) \n NLB : 2회", 
          image: BRIONLogo },

        { id: 9, 
        title: "Nongshim RedForce", 
        desc: "창단 : 2016년 5월 15일 \n 모기업 : 농심 이스포츠 주식회사 \n 소유주 : 오지환 \n 단장 : 차민규 \n 감독 : 허영철[irean] \n 코치 : 신진영[Coco] | 박승진[Chelly] | 채도준[Noblesse] \n 주장 : 이승복[Sylvie] \n \n 우승 경력 \n Challenger Korea : 2회 (2부 리그)", 
        image: NongshimLogo },

        { id: 10, 
          title: "KWANGDONG FREECS", 
          desc: "창단 : 2014년 4월 \n 모기업 : 아프리카 TV \n 대표/단장 : 채정원[T.Killer] \n 사무국장 : 주영달[oDin] \n 매니저 : 호진솔 \n 감독 : 김대호[cvMax] \n 코치 : 김건우[Millimas] | 정명훈[FanTaSy]\n 주장 : 공석 \n \n 우승 경력 \n Challenger Korea : 1회 (2부 리그) \n KeSPA Cup : 1회", 
          image: FreecsLogo },

      ],
    };
  }

  getReadContent() {  /* 현재 선택된 Content 의 ID 값을 통한 title & desc 를 UpdateContentate Component 로 전달하기 위한 함수 */
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContent(){ /* Application의 Mode들을 구조화한 함수| Title, Read, Create, Update */
    var _content = this.getReadContent();
    var _title,
    _desc,
    _image,
    _article = null;
  if (this.state.mode === "welcome") {  /* Page Title 입장시 보이는 기본적인 Mode */
    _title = this.state.welcome.title;
    _desc = this.state.welcome.desc;
    _image = this.state.welcome.image;
    _article = (
      <ReadContent title={_title} desc={_desc} img={_image}></ReadContent>
    );
  } else if (this.state.mode === "read") { /* 기본적으로 Page Content를 받아오는 기능 */
    _article = (
      <ReadContent
          title={_content.title}
          desc={_content.desc}
          img={_content.image}
        ></ReadContent>
    );
  } else if (this.state.mode === "create") { /* New Page를 만드는 기능 */
    _article = (
      <CreateContent
        onSubmit={function (_title, _desc) {
          this.max_content_id = this.max_content_id + 1;
          var _contents = this.state.contents.concat({
            id: this.max_content_id,
            title: _title,
            desc: _desc,
            image: "",
          });
          
          this.setState({ contents: _contents });
        }.bind(this)}
      ></CreateContent>
    );
  } else if (this.state.mode === "update") { /* Page Content를 Edit & Update 하는 기능 */
    _article = (
      <UpdateContent
        data={_content}
        onSubmit={function (_id, _title, _desc) {
          var _contents=Array.from(this.state.contents);
          var i = 0;
          while (i < _contents.length){
            if(_contents[i].id === _id){
              _contents[i] = {id: _id, title: _title, desc: _desc};
              break;
            }
            i+=1;
          }
          
          this.setState({ contents: _contents });
        }.bind(this)}
      ></UpdateContent>
    );
  }
  return _article;
}


  render() {
    return (
      <div className="App page">
        <div class = "hdr" >
          <Subject
          image={this.state.subject.image}
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
          ></Subject>
        </div>
        <div>
          <div class = 'toc'> {/* 목차 */}
            <div class = 'page-toc'>
              <TOC //Table Of Content
              onChangePage={function (id) {
                this.setState({
                  mode: "read",
                  selected_content_id: Number(id),
                });
              }.bind(this)}
              data={this.state.contents}
              ></TOC>
            <Creator
              onChangeMode={function (_mode) {this.setState({ mode: _mode});}.bind(this)}>
            </Creator>
              
            </div>
            <div class='page-body A1Font'>
            <Control //Control 부분
                onChangeMode={function (_mode) { /*  삭제기능 구현  */
                  if (_mode === "delete") {
                    if (window.confirm("really?")) {
                      var _contents = Array.from(this.state.contents);
                      var i = 0;
                      while (i < _contents.length) {
                        if (_contents[i].id === this.state.selected_content_id) {
                          _contents.splice(i, 1);
                          break;
                        }
                        i = i + 1;
                      }
                      this.setState({ mode: "welcome", contents: _contents });  {/* 페이지 삭제 후 시작페이지로 이동 */}
                      alert("deleted!");
                    }
                  } else {
                    this.setState({ mode: _mode });
                  }
                }.bind(this)}
              ></Control>
              <br></br>
              {this.getContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;