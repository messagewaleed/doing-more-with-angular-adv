import { Component } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent {
  // blogPost: BlogPost[] = [];
  blogPost!: BlogPost[][];

  currentPage: number = 0;

  ngOnInit() {
    // this.blogPost.push(new BlogPost('First Title', 'First description'));
    // this.blogPost.push(new BlogPost('Second Title', 'Second description'));
    // this.blogPost.push(new BlogPost('Third Title', 'Third description'));

    this.blogPost = [
      // Content for Page 1
      [
        {
          title: 'Kuwait',
          description:
            'Kuwait (/kʊˈweɪt/ (listen);[7][8] Arabic: الكويت al-Kuwayt, Gulf Arabic pronunciation: [ɪl‿ɪkweːt] or [lɪkweːt]), officially the State of Kuwait (Arabic: دولة الكويت Dawlat al-Kuwayt), is a country in Western Asia. It is situated in the northern edge of Eastern Arabia at the tip of the Persian Gulf, bordering Iraq to the north and Saudi Arabia to the south.[9] Kuwait also shares maritime borders with Iran. Kuwait has a coastal length of approximately 500 km (311 mi).[10] Most of the countrys population reside in the urban agglomeration of the capital city Kuwait City.[11] As of 2022, Kuwait has a population of 4.45 million people of which 1.45 million are Kuwaiti citizens while the remaining 3.00 million are foreign nationals from over 100 countries.',
        },
        {
          title: 'Mesopotamia',
          description:
            'Mesopotamia[a] is a historical region of Western Asia situated within the Tigris–Euphrates river system, in the northern part of the Fertile Crescent. Today, Mesopotamia occupies modern Iraq.[2][3]ylon in 539 BC, when it was conquered by the Achaemenid Empire. It fell to Alexander the Great in 332 BC, and after his death, it became part of the Greek Seleucid Empire. Later the Arameans dominated major parts of Mesopotamia (c. 900 BC – 270 AD).[6][7]',
        },
        {
          title: 'Babylonia',
          description:
            'Babylonia (/ˌbæbɪˈloʊniə/; Akkadian: 𒆳𒆍𒀭𒊏𒆠, māt Akkadī) was an ancient Akkadian-speaking state and cultural area based in the city of Babylon in central-southern Mesopotamia (present-day Iraq and parts of Syria). It emerged as an Amorite-ruled state',
        },
      ],
      // Content for Page 2
      [
        {
          title: 'Another title',
          description:
            'Kuwait (/kʊˈweɪt/ (listen);[7][8] Arabic: الكويت al-Kuwayt, Gulf Arabic pronunciation: [ɪl‿ɪkweːt] or [lɪkweːt]), officially the State of Kuwait (Arabic: دولة الكويت Dawlat al-Kuwayt), is a country in Western Asia. It is situated in the northern edge of Eastern Arabia at the tip of the Persian Gulf, bordering Iraq to the north and Saudi Arabia to the south.[9] Kuwait also shares maritime borders with Iran. Kuwait has a coastal length of approximately 500 km (311 mi).[10] Most of the countrys population reside in the urban agglomeration of the capital city Kuwait City.[11] As of 2022, Kuwait has a population of 4.45 million people of which 1.45 million are Kuwaiti citizens while the remaining 3.00 million are foreign nationals from over 100 countries.',
        },
        {
          title: 'Yet Another blog',
          description:
            'Kuwait (/kʊˈweɪt/ (listen);[7][8] Arabic: الكويت al-Kuwayt, Gulf Arabic pronunciation: [ɪl‿ɪkweːt] or [lɪkweːt]), officially the State of Kuwait (Arabic: دولة الكويت Dawlat al-Kuwayt), is a country in Western Asia. It is situated in the northern edge of Eastern Arabia at the tip of the Persian Gulf, bordering Iraq to the north and Saudi Arabia to the south.[9] Kuwait also shares maritime borders with Iran. Kuwait has a coastal length of approximately 500 km (311 mi).[10] Most of the countrys population reside in the urban agglomeration of the capital city Kuwait City.[11] As of 2022, Kuwait has a population of 4.45 million people of which 1.45 million are Kuwaiti citizens while the remaining 3.00 million are foreign nationals from over 100 countries.',
        },
      ],
      // Page 3 content
      [
        {
          title: 'Talking about Kuwait Again',
          description:
            'Kuwait (/kʊˈweɪt/ (listen);[7][8] Arabic: الكويت al-Kuwayt, Gulf Arabic pronunciation: [ɪl‿ɪkweːt] or [lɪkweːt]), officially the State of Kuwait (Arabic: دولة الكويت Dawlat al-Kuwayt), is a country in Western Asia. It is situated in the northern edge of Eastern Arabia at the tip of the Persian Gulf, bordering Iraq to the north and Saudi Arabia to the south.[9] Kuwait also shares maritime borders with Iran. Kuwait has a coastal length of approximately 500 km (311 mi).[10] Most of the countrys population reside in the urban agglomeration of the capital city Kuwait City.[11] As of 2022, Kuwait has a population of 4.45 million people of which 1.45 million are Kuwaiti citizens while the remaining 3.00 million are foreign nationals from over 100 countries.',
        },
      ],
    ];
  }
}
