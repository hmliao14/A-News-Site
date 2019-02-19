function autorun()
{
  console.log('script is loaded');
  let news_feed = [
    {
      title: 'As Wall Street rallies on US-China trade hopes, bond investors may be worried about a recession',
      author: 'Patti Domm',
      date: '12:02 PM ET Sun, 17 Feb 2019',
      link: 'https://www.cnbc.com/2019/02/17/stocks-rally-on-us-china-trade-deal-but-bond-investors-fear-recession.html',
      image: `https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/07/11/103779191-GettyImages-173274410.530x298.jpg?v=1544219696`,
      source: "CNBC",
    },
    {
      title: "Singapore’s January exports to China collapsed in ‘very worrying’ development for both economies",
      author: 'Finbarr Bermingham',
      date: 'Monday, 18 Feb, 2019 10:14pm',
      link: 'https://www.scmp.com/economy/china-economy/article/2186592/singapores-january-exports-china-collapsed-very-worrying',
      image: `https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2019/02/18/b30e4f06-3334-11e9-b09f-892c410303c7_image_hires_160852.jpg?itok=1N8NzuhB`,
      source: "South China Morning Post",
    },
    {
      title: 'Will the US and China finally agree a trade deal?',
      author: '',
      date: '30 January 2019',
      link: 'https://www.bbc.com/news/business-47047289',
      image: `https://ichef.bbci.co.uk/news/660/cpsprodpb/DF29/production/_105392175_hi051830569.jpg`,
      source: "BBC",
    },
    {
      title: 'Feeling Unwelcome, Amazon Ditches Plans For New York Hub',
      author: 'Reuters',
      date: '2019-02-14 09:30:08',
      link: 'http://www.iporoom.com/detail/2226',
      image: `https://gdb.voanews.com/D0F01ABF-C31B-4FD9-9D87-4881DAFF2DC0_cx0_cy6_cw0_w800_h450.jpg`,
      source: "Ipo Room",
    },
    {
      title: "China's Bad Debt Managers Risk Becoming Bad Credits Themselves",
      author: "Reuters",
      date: 'Feb 17, 2019 4:55 AM  PT',
      link: 'https://www.capitalwatch.com/article-3466-1.html',
      image: `https://img.capitalwatch.com/201902/14/5c660a7300f12.JPG`,
      source: "CapitalWatch",
    },
  ]
}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
else window.onload = autorun;
