'use client'
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(false);

  const inputRef = useRef(null)
  const fetchData = async () => {
    try {
      let fetchDet = await fetch(`${process.env.NEXT_PUBLIC_API_HOST_URL}/posts`)
      let jsonData = await fetchDet.json();
      setPosts(jsonData)
    } catch (err) {
      console.log(err)
    }
  }
  const searchBtn = async (e) => {
    try {
      if (e.type == 'keydown' && e.key !== 'Enter') {
        return
      }
      setSearch(true)
      let fetchDet = await fetch(`${process.env.NEXT_PUBLIC_API_HOST_URL}/posts?q=${inputRef.current.value}`)
      let jsonData = await fetchDet.json();
      setPosts(jsonData)
      setSearch(false)
    } catch (err) {

    } finally {
      setSearch(false)
    }

  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </main>
      <div className="flex justify-end px-4">
        <input onKeyDown={searchBtn} disabled={search} ref={inputRef} type="text" className="px-4 py-2 border border-gray-300 rounded-md" placeholder="Search..." />
        <button onClick={searchBtn} disabled={search} className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">{search ? '.....' : "Search"}</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          posts && posts.length > 0 && posts.map((item, i) => {
            return (
              <Link href={`/post/${item._id}`}>
                <div className="border border-gray-200 p-4" key={i}>
                  <img className="w-full h-48 object-cover mb-4" src={item.image} alt="Post Image" />
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Link>
            )
          })
        }
        {
          inputRef && inputRef.current && inputRef.current.value && posts && posts.length == 0 &&
          <p>No Post Available for -{inputRef.current.value}</p>
        }
      </div>
    </>
  );
}
