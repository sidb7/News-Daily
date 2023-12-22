import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';
import Spinner from './Spinner';
export default class News extends Component {

static defautlProps =
{
    country : "in"

}
static propTypes = 
{
    country : PropTypes.string
}

    // articles = [
    //     {
    //         "source": {
    //             "id": "espn",
    //             "name": "ESPN"
    //         },
    //         "author": "Andrea AdelsonESPN Senior Writer ",
    //         "title": "North Carolina football coach Mack Brown signs 1-year extension",
    //         "description": "North Carolina coach Mack Brown has agreed to a one-year contract extension that keeps him with the Tar Heels through the 2027 season.",
    //         "url": "http://espn.go.com/college-football/story/_/id/35576738/north-carolina-football-coach-mack-brown-signs-1-year-extension",
    //         "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0202%2Fr1125756_1296x729_16%2D9.jpg",
    //         "publishedAt": "2023-02-02T15:43:00Z",
    //         "content": "North Carolina coach Mack Brown has agreed to a one-year contract extension that keeps him with the Tar Heels through the 2027 season, the school announced Thursday.\r\nThe financial terms remain the s… [+986 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-sport",
    //             "name": "BBC Sport"
    //         },
    //         "author": null,
    //         "title": "Mason Greenwood attempted rape charges dropped",
    //         "description": "The Manchester United footballer was arrested amid allegations surrounding images and videos online.",
    //         "url": "http://www.bbc.co.uk/news/uk-england-manchester-64502021",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/139A0/production/_127188208_hi073443971.jpg",
    //         "publishedAt": "2023-02-02T14:37:21.6425931Z",
    //         "content": "Charges of attempted rape and assault have been dropped against Manchester United footballer Mason Greenwood.\r\nThe 21-year-old was arrested in January last year amid allegations surrounding images an… [+1261 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "independent",
    //             "name": "Independent"
    //         },
    //         "author": "Josh Payne",
    //         "title": "Footballer Mason Greenwood has attempted rape and assault charges against him dropped",
    //         "description": "Charges against the Manchester United striker were discontinued after a key witness withdrew from the case",
    //         "url": "http://www.independent.co.uk/news/uk/crime/mason-greenwood-attempted-rape-charges-dropped-b2274517.html",
    //         "urlToImage": "https://static.independent.co.uk/2022/11/21/10/1d5f4affc0c4caf4d99b12de8f6800c2Y29udGVudHNlYXJjaGFwaSwxNjY5MTEzMDE3-2.69879158.jpg?quality=75&width=1200&auto=webp",
    //         "publishedAt": "2023-02-02T14:36:32Z",
    //         "content": "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nManchester United footballer Mason Greenwood has had… [+2569 chars]"
    //     },

    //     {
    //         "source": {
    //             "id": "associated-press",
    //             "name": "Associated Press"
    //         },
    //         "author": "MARK KENNEDY",
    //         "title": "Review: '80 for Brady' is a sports film fumble for the ages",
    //         "description": "Tom Brady has officially — and finally, he insists — retired from the National Football League. Based on his new movie “80 For Brady,” it's also time that he immediately retire from filmmaking.",
    //         "url": "https://apnews.com/f326e464ff0a1ceb04180b1facebd85a",
    //         "urlToImage": "https://storage.googleapis.com/afs-prod/media/5a0d76394bd849e5994da23795760863/3000.jpeg",
    //         "publishedAt": "2023-02-01T22:59:44Z",
    //         "content": "Tom Brady has officially — and finally, he insists — retired from the National Football League. Based on his new movie “80 For Brady,” it's also time that he immediately retire from filmmaking.No one… [+3996 chars]"
    //     },

    //     {
    //         "source": {
    //             "id": "talksport",
    //             "name": "TalkSport"
    //         },
    //         "author": "talkSPORT",
    //         "title": "Football news LIVE: Mason Greenwood has police charges dropped, Man United star Varane announces France...",
    //         "description": "",
    //         "url": "https://talksport.com/football/1282444/football-news-gossip-live-mason-greenwood-varane-man-united-everton/",
    //         "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/02/JF-TALKSPORT-Enzo-Fernandez.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
    //         "publishedAt": "2023-02-02T14:12:10Z",
    //         "content": "talkSPORT.com has you covered with all the latest Premier League news and transfer fallout in our dedicated football live blog.\r\nAfter a week dominated by FA Cup drama, transfer sagas and Carabao Cup… [+473 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "associated-press",
    //             "name": "Associated Press"
    //         },
    //         "author": "MARK KENNEDY",
    //         "title": "Review: '80 for Brady' is a sports film fumble for the ages",
    //         "description": "Tom Brady has officially — and finally, he insists — retired from the National Football League. Based on his new movie “80 For Brady,” it's also time that he immediately retire from filmmaking.",
    //         "url": "https://apnews.com/f326e464ff0a1ceb04180b1facebd85a",
    //         "urlToImage": "https://storage.googleapis.com/afs-prod/media/5a0d76394bd849e5994da23795760863/3000.jpeg",
    //         "publishedAt": "2023-02-01T22:59:44Z",
    //         "content": "Tom Brady has officially — and finally, he insists — retired from the National Football League. Based on his new movie “80 For Brady,” it's also time that he immediately retire from filmmaking.No one… [+3996 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "fox-sports",
    //             "name": "Fox Sports"
    //         },
    //         "author": "Bryan Fischer",
    //         "title": "Signing Day Report Card: Colorado, Oregon, Alabama, Texas shine bright",
    //         "description": "The college football recruiting cycle for 2023 came to a close with Wednesday's National Signing Day. Here's who aced the test.",
    //         "url": "http://www.foxsports.com/stories/college-football/signing-day-report-card-colorado-oregon-alabama-texas-shine-bright",
    //         "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/02/1408/814/02.01.23_RecruitingReportCard_Horizontal.jpg?ve=1&tl=1",
    //         "publishedAt": "2023-02-01T22:56:00Z",
    //         "content": "Twice each year, college football finds a need to dust off the fax machines as recruits across the country send their signatures in to programs with high hopes of making a big impact. Some exceed suc… [+9096 chars]"
    //     },

    //      {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
    //         "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
    //         "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
    //         "publishedAt": "2020-04-27T07:20:43Z",
    //         "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    //     }   

    // ]
    articles = [];

    constructor() {
        super();
        //console.log("helloo constr")
        this.state = {
            articles: this.articles,
            loading: false,
            page : 1,
            
            
        }
    }
    async update()
    {
        const url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=01915d6d5c604414b7bbbe72c4dbc033&page=${this.state.page}`;
        this.setState({loading:true});
        this.props.setProgress(10);
        let data = await fetch(url);
        this.props.setProgress(40);
        let parseddata = await data.json();
        this.props.setProgress(70);
       // console.log(parseddata.articles);
        this.setState({ articles: parseddata.articles, totalResult : parseddata.totalResults, loading:false });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.update();
    }
    async componentDidUpdate(pp,ps,ss) {
        console.log("helloo1" + ps === pp)
    }

  

    nexu = async ()=>
    {   
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category = ${this.props.category}&apiKey=01915d6d5c604414b7bbbe72c4dbc033&page= ${this.state.page + 1}`;
        // let data = await fetch(url);
        // let parseddata = await data.json();
      
        // this.setState(
        //    { page: this.state.page + 1,
        //     articles: parseddata.articles
        //    }
        // );

        this.setState(
            {
                page: this.state.page + 1
            },()=>{this.update();}
        );
        
       
    }
    prevu = async ( )=>
    {
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category = ${this.props.category}&apiKey=01915d6d5c604414b7bbbe72c4dbc033&page= ${this.state.page - 1}`;
        // let data = await fetch(url);
        // let parseddata = await data.json();
        // console.log(parseddata);
       
        
        // this.setState(
        //    { page: this.state.page - 1,
        //     articles: parseddata.articles
        //    }
        // );

        this.setState(
            {
                page: this.state.page - 1
            },()=>{this.update();}
        )
    
    }

    render() {
        document.title = "NewsMonkey "+ (""+this.props.category).charAt(0).toUpperCase()+(""+this.props.category).slice(1) + "- TOP HEADLINES";
        return (
            <div className="container-fluid  "  >
              
 <h1 className='text-center ' style={{marginTop:"90px"}}><strong>NewsMonkey {(""+this.props.category).charAt(0).toUpperCase()+(""+this.props.category).slice(1)} - TOP HEADLINES</strong></h1>

                <div className='row m-2 justify-content-center align-content-center'>
                        <div className='w-100 d-flex justify-content-center'>{this.state.loading&&<Spinner/>}</div>
                    {!this.state.loading&&this.state.articles.map((element) => {

                        return <div className='col-xsm-12 col-sm-6 col-md-4 col-lg-3 ' key={element.url}  >
                            <NewsItem mode = {this.props.mode} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 110) : ""}
                                imageUrl={element.urlToImage ? element.urlToImage : "https://img.freepik.com/free-photo/refresh-icon-reload-perforated-paper_53876-14265.jpg"}
                                newsUrl={element.url} date = {element.publishedAt} author = {element.author}/>
                        </div>

                    })}



                </div>
                {!this.state.loading&&<div  className="container d-flex gap-2 d-md-flex  justify-content-end mb-5 ">
                    <button disabled ={this.state.page<=1} className   ="btn btn-dark " type="button" onClick={this.prevu}>&larr; Prev</button>
                    <p className='my-2'><strong>{this.state.page} / {Math.ceil(this.state.totalResult/20)}</strong> </p>
                    <button disabled = {Math.ceil(this.state.totalResult/20)===this.state.page} className="btn btn-dark" type="button" onClick={this.nexu}> Next &rarr;</button>
                    
                </div>}
            </div>

        )
    }
}
