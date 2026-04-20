import React from 'react';

const booksData = [
    { id: 1, title: "Introduction to Quranic Sciences", author: "Dr. Yusuf", category: "Theology" },
    { id: 2, title: "History of Sufism in Kashmir", author: "Prof. Hassan", category: "History" },
];

export default function Books({ searchTerm }) {
    const filtered = booksData.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map(book => (
                <div key={book.id} className="flex flex-col group cursor-pointer">
                    <div className="aspect-[3/4] bg-gray-100 rounded-md mb-3 group-hover:shadow-xl transition-shadow flex items-center justify-center text-gray-300">
                        {/* Placeholder for Book Cover */}
                        <span className="text-[10px] uppercase font-bold">Book Cover</span>
                    </div>
                    <h4 className="font-bold text-sm leading-tight">{book.title}</h4>
                    <p className="text-[10px] text-gray-500 uppercase mt-1">{book.author}</p>
                </div>
            ))}
        </div>
    );
}