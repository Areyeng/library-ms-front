'use client';
import BookCard from "@/components/BookCard"
import FilterTable from "@/components/FilterTable"
import { Card } from "antd"
import styles from "./styles.module.css";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { BookActionsContext, BookStatesContext } from "@/providers/BookProvider/context";
import withAuth from "@/hocs/withAuth";
import { SearchActionContext, SearchStateContext } from "@/providers/Search/context";
import { optimizeImage } from "next/dist/server/image-optimizer";

function Catalog(){
    const { GetAllBooks } = useContext(BookActionsContext);
    //const state = useContext(BookStatesContext);
    const [bookData,setBookData]= useState();
    
    const {searchBookByTitle,searchBookByAuthor,searchBookByISBN} = useContext(SearchActionContext);
    const state = useContext(SearchStateContext);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data =  await GetAllBooks().then((res)=>res);
            
            setBookData(data.items);
            
          } catch (error) {
            console.error('Error fetching book data:', error);
          }
        };
    
        fetchData();
      }, []);
      //search 
      // interface SearchResult {
      //   searchBookByTitle: 
      // }
      interface SearchOption {
        value: string;
        label: string;
      }
      const [searchTerm, setSearchTerm] = useState<string>(undefined);
      const [searchOption, setSearchOption] = useState<string>('title');
      const [searchResults, setSearchResults] = useState<any>([]);

    // Function to handle click on search button
      const handleSearch = (): void => {
          
          const searchResults = performSearch(searchTerm, searchOption); 
          setSearchResults(searchResults);
      };

    // Function to perform search
    const performSearch = async (term: string, option: string) => {
        // Implement your search logic here based on the selected option

        // For demonstration, returning some dummy results
        console.log(`Searching for ${term} in ${option}`);
         if(option === 'title'){
          
          try {
           var data3=  await searchBookByTitle(term);
            // setBook(data3.items);
            console.log('returned search:' ,data3)
            setSearchResults(data3);
          } catch (error) {
            console.log("error book not searched for");
          }
        }else if(option === 'author'){
          try {
            var data3=  await searchBookByAuthor(term);
             // setBook(data3.items);
             console.log('returned search:' ,data3)
             setSearchResults(data3);
           } catch (error) {
             console.log("error book not searched for");
           }
         }
        else if(option === 'isbn'){
          try {
            var data3=  await searchBookByISBN(term);
             // setBook(data3.items);
             console.log('returned search:' ,data3)
             setSearchResults(data3);
           } catch (error) {
             console.log("error book not searched for");
           }
         }
        }
      
       
  
    

    // Dropdown options
    const searchOptions:any= [
        { value: 'title', label: 'Title' },
        { value: 'author', label: 'Author' },
        { value: 'isbn', label: 'ISBN' }
    ];

     
     
    return(
        <>
            <div className={styles.searchContainer}>
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Enter search term..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Controlled input
            />
            <select
                className={styles.dropdown}
                value={searchOption}
                onChange={(e) => setSearchOption(e.target.value)}
            >
                {searchOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            <div onClick={handleSearch} className={styles.searchIcon}>
                
                   
                    <Image
                        src="/search.png"
                        alt="search-bar"
                        width={24}
                        height={24}
                    />
               
            </div>
            {/* Render search results */}
            <div className={styles.returnedBooks}>
              {searchResults.length > 0 &&  <BookCard books={searchResults}/>
              }
              
              
            </div>
            
            
           
        </div>



            <FilterTable/>
            <div className={styles.cards}>
            {bookData && <BookCard books={bookData}/>}
            </div>
            
        </>
    );
}
export default withAuth(Catalog);