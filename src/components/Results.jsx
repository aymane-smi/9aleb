import React, { useContext, useEffect } from 'react'
import { ResultContext } from "../context/Result.context";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player';

function Results() {
  const { results, getResults, loading, searchTerm} = useContext(ResultContext);
  const location = useLocation();
  useEffect(()=>{
    getResults(`${location.pathname}/q=${searchTerm}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, searchTerm]);
  if(loading)
    return <Loading />
  // eslint-disable-next-line default-case
  switch(location.pathname){
    case "/search":
      return (<div className="space-y-5 sm:px-5">
        {results?.results?.map(({link, title, description}, i)=>(
          <div key={i} className="w-full mb-3 md:w-5/6">
            {/*eslint-disable-next-line react/jsx-no-target-blank*/}
            <a href={link} target="_blank" rel="nonreferer">
              <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
              {title.length > 90 ? `${title.substring(0, 90)}...` : title}
              </p>
              <p className="text-sm dark:text-blue-200">
                {link.length > 30 ? `${link.substring(0, 50)}...` : link}
              </p>
            </a>
            <p className="mt-3 text-md dark:text-gray-50 w-5/6 text-gray-900">
              {description}
            </p>
          </div>
        ))}
      </div>);
    case "/image":
      return (<div className="flex flex-wrap gap-px w-full">
        {results?.image_results?.map(({image, link: {href, title}}, i)=>(
          // eslint-disable-next-line react/jsx-no-target-blank
          <a className="p-3 sm:p-5" href={href} key={i} target="_blank" rel="nonreferer">
            <img src={image?.src} alt={title} loading="lazy"/>
            <p className="w-36 break-words text-sm mt-2">
              {title}
            </p>
          </a>
        ))}
      </div>);
    case "/news":
      return (<div className="space-y-5 sm:px-5">
        {results && results?.entries?.map(({link, title, id, published})=>(
          <div key={id} className="w-full mb-3 md:w-5/6">
            {/*eslint-disable-next-line react/jsx-no-target-blank*/}
            <a href={link} target="_blank" rel="nonreferer">
              <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
              {title.length > 90 ? `${title.substring(0, 90)}...` : title}
              </p>
              <p className="text-sm dark:text-blue-200">
                {link.length > 30 ? `${link.substring(0, 50)}...` : link}
              </p>
            </a>
            <i className="text-xs dark:text-blue-100">{published}</i>
          </div>
        ))}
      </div>);
    case "/video":
      return (<div className="space-y-5 sm:px-5">
        {results?.results?.map(({link, title, description}, i)=>(
          <div key={i} className="w-full mb-3 md:w-5/6 flex">
            { link.includes("youtube") && <ReactPlayer 
              url={link}
              controls
              className="border-full"
              width={200}
              height={200}
            />}
            <div className="ml-4">
              {/*eslint-disable-next-line react/jsx-no-target-blank*/}
              <a href={link} target="_blank" rel="nonreferer">
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                {title.length > 90 ? `${title.substring(0, 90)}...` : title}
                </p>
                <p className="text-sm dark:text-blue-200">
                  {link.length > 30 ? `${link.substring(0, 50)}...` : link}
                </p>
              </a>
              <p className="mt-3 text-md dark:text-gray-50 w-5/6 text-gray-900">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>);
  }
}

export default Results;