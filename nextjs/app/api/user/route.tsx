import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      "id": "00",
      "ownerInfo": {
        "enName": "suji bae",
        "koName": "배수지",
        "birthDay": "1990.01.09",
        "phoneNum": "010-8316-2942",
        "emailAdd": "business.thetititle@gmail.com",
        "baseAdd": "Seoul, Korea",
        "gitHub": "https://github.com/thetititle",
        "veLog": "https://velog.io/@thetitle/posts",
        "figma": "https://www.figma.com/file/BppUrWJDWioiMDQ3XMWiPh/framework-ver?type=design&node-id=16-56&mode=design",
        "skills": [
          {
            "name": "VScode",
            "imgUrl": "http://thetititle.com/img/skills/vscode.png"
          },
          {
            "name": "html5",
            "imgUrl": "http://thetititle.com/img/skills/html5.png"
          },
          {
            "name": "css3",
            "imgUrl": "http://thetititle.com/img/skills/css3.png"
          },
          {
            "name": "scss",
            "imgUrl": "http://thetititle.com/img/skills/sass.png"
          },
          {
            "name": "javascript",
            "imgUrl": "http://thetititle.com/img/skills/javascript.png"
          },
          {
            "name": "vue3",
            "imgUrl": "http://thetititle.com/img/skills/vue.png"
          },
          {
            "name": "quasar",
            "imgUrl": "http://thetititle.com/img/skills/quasar.png"
          },
          {
            "name": "figma",
            "imgUrl": "http://thetititle.com/img/skills/figma.png"
          },
          {
            "name": "photoshop",
            "imgUrl": "http://thetititle.com/img/skills/photoshop.png"
          },
          {
            "name": "github",
            "imgUrl": "http://thetititle.com/img/skills/github.png"
          },
          {
            "name": "gitlab",
            "imgUrl": "http://thetititle.com/img/skills/gitlab.png"
          }
        ]
      },
      "timeLine": [
        {
          "id": "0",
          "date": "2021.12",
          "desc": [
            "그린아트컴퓨터학원 웹퍼블리셔/FE 디지털실무 양성과정CS 수료"
          ]
        },
        {
          "id": "1",
          "date": "2021.12",
          "desc": ["그린아트컴퓨터학원 React.js 수료"]
        },
        {
          "id": "2",
          "date": "2022.02",
          "desc": ["가이랩주식회사 주니어 FE 입사"]
        },
        {
          "id": "3",
          "date": "2022~",
          "desc": [
            "가이랩 김총무 RPA UI/UX 디자인 및 개발",
            "가이랩 김총무 ERP UI/UX 디자인 및 개발",
            "가이랩 김총무 ADM UI/UX 디자인 및 개발"
          ]
        },
        {
          "id": "4",
          "date": "2023.01",
          "desc": ["화재보험협회 FIND(가제) UI/UX 초기 디자인"]
        },
        {
          "id": "5",
          "date": "2023.03",
          "desc": ["화재보험협회 FIND(가제) UI/UX 초기 개발참여"]
        },
        {
          "id": "6",
          "date": "2023.08",
          "desc": ["통일부 통합지원시스템 퍼블리싱"]
        },
        {
          "id": "7",
          "date": "2023.10",
          "desc": ["공무원연금공단 연금수급권 확인서비스 퍼블리싱"]
        },
        {
          "id": "8",
          "date": "NOW",
          "desc": ["Ready for NEW NEST!"]
        }
      ],
      "troubleShooting": [
        {
          "id": "0",
          "date": "~2023.03",
          "issue": [
            "GA를 위한 RPA,EPT등의 project가 단일 branch로 이루어져 있어서 design이나 data를 각 고객사들의 needs를 맞출 수 없었음"
          ],
          "situation": [
            "사수는 물론 시니어가 1명도 없는 사무실 상황",
            "모든 data와 style이 하나의 Branch로 뭉쳐져 배포된 상태"
          ],
          "solution": [
            "1, Mount하거나 Creat할 때 url을 가져온 후",
            "2, 각GA의 인식자가 url에 포함이 되면, 해당 GA가 원하는 style과 data를 보여줌"
          ],
          "result": [
            "data 호출까지 시간이 다소 소요되었으나 고객의 needs는 충족됨"
          ]
        }
      ],
      "product": [
        {
          "id": "0",
          "title": "🔮Manyo Factory site",
          "skills": ["HTML", "JavaScript", "css"],
          "imgUrl": "http://thetititle.com/img/21_manyo.jpg",
          "year": "2021",
          "desc": " Academy project1",
          "href": "http://thetititle.com/products/manyo/index.html/",
          "issueCheck": []
        },
        {
          "id": "1",
          "title": "🍩Knotted Mobile site",
          "skills": ["HTML", "jQuery", "css"],
          "imgUrl": "http://thetititle.com/img/21_knotted.jpg",
          "year": "2021",
          "desc": "Academy project2",
          "href": "http://thetititle.com/products/knotted/index.html",
          "issueCheck": []
        },
        {
          "id": "2",
          "title": "💚this page Quasar(VUE3)",
          "skills": ["Quasar", "JavaScript", "scss"],
          "imgUrl": "http://thetititle.com/img/23_design.jpg",
          "year": "2023",
          "desc": "Archive website",
          "href": "http://thetititle.com/products/vue3/index.html",
          "issueCheck": [
            {
              "id": "0",
              "complate": "FINISH",
              "desc": "반응형 구현 1차"
            },
            {
              "id": "1",
              "complate": "FINISH",
              "desc": "Json data생성 및 axios, api를 통한 data호출"
            },
            {
              "id": "2",
              "complate": "FINISH",
              "desc": "Data binding"
            },
            {
              "id": "3",
              "complate": "FINISH",
              "desc": "반응형 구현 2차(수정)"
            },
            {
              "id": "4",
              "complate": "FINISH",
              "desc": "Product 마녀팩토리 Unexpected token '<' 에러 체크"
            },
            {
              "id": "5",
              "complate": "FINISH",
              "desc": "PC화면 스크롤시 NAV Highlight 분기점 체크"
            }
          ]
        },
        {
          "id": "3",
          "title": "💙this page Next.js(REACT)",
          "skills": ["Next.js", "TypeScript", "css"],
          "imgUrl": "http://thetititle.com/img/24_design.jpg",
          "year": "2024",
          "desc": "Archive website",
          "href": "#",
          "issueCheck": [
            {
              "complate": "PRE",
              "desc": "Header Logo 조건에 따른 className 미변경 이슈"
            },
            {
              "complate": "PRE",
              "desc": "반응형 구현"
            },
            {
              "complate": "PRE",
              "desc": "Data binding"
            },
            {
              "complate": "PRE",
              "desc": "api를 통한 data호출"
            }
          ]
        },
        {
          "id": "4",
          "title": "✨BiBiANG site",
          "skills": ["REACT", "JavaScript", "scss"],
          "imgUrl": "http://thetititle.com/img/bibiang.jpg",
          "year": "2024",
          "desc": "Shopping Mall renewal",
          "href": "#",
          "issueCheck": []
        }
      ]
    }
  ]);
}