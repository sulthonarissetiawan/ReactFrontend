import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Search, Plus, Download, Trash2, Eye, Archive } from 'lucide-react';

const ManageAsset = () => {
  const dataAset = [
    { kode: 'CAM CANON D1200-001', nama: 'Kamera Canon EOS 5D', kategori: 'Fotografi & Video', kondisi: 'Baik', status: 'Tersedia', img: '/img/camera-canon-1300d.jpeg' },
    { kode: 'CAM CANON D1200-001', nama: 'Kamera Sony 70-200mm', kategori: 'Fotografi & Video', kondisi: 'Baik', status: 'Tersedia', img: '/img/camera-canon-1300d.jpeg' },
    { kode: 'CAM CANON D1200-001', nama: 'Tripod Manfrotto', kategori: 'Furniture', kondisi: 'Rusak', status: 'Dipinjam', img: '/img/camera-canon-1300d.jpeg' },
    { kode: 'CAM CANON D1200-001', nama: 'Mic Wireless Set', kategori: 'Elektronik', kondisi: 'Baik', status: 'Tersedia', img: '/img/camera-canon-1300d.jpeg' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 font-sans">
      <Sidebar />

      <main className="flex-1 p-4 md:p-10 pt-20 md:pt-10 overflow-x-hidden">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Manajemen Aset</h1>
            <p className="text-xs md:text-sm text-gray-500 max-w-2xl">
              Kelola seluruh aset dan inventaris Kantor Berita ANTARA, termasuk pelacakan lokasi dan status kondisi.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#991B1F] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm hover:bg-red-800 transition-colors">
            <Download size={16} />
            Ekspor CSV
          </button>
        </div>

        {/* Search and Filter Box */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
          <h3 className="font-bold text-sm text-gray-700 mb-4">Cari Aset</h3>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            
            {/* Input Search */}
            <div className="relative flex-1 w-full">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Masukkan nama barang, kode aset, atau ..." 
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-red-500 bg-gray-50/30"
              />
            </div>

            {/* Dropdown Kategori */}
            <select className="w-full md:w-48 p-2.5 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none bg-white">
              <option>Semua Kategori</option>
              <option>Elektronik</option>
              <option>Furniture</option>
            </select>

            {/* Tombol Tambah Aset */}
            <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#991B1F] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-red-800 transition-colors">
              <Plus size={18} />
              Tambah Aset
            </button>
            
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-50 flex justify-between items-center">
            <div className="flex items-center gap-2 text-[#991B1F]">
              <Archive size={20} className="opacity-80" />
              <h2 className="font-bold text-gray-800">Daftar Barang</h2>
            </div>
            <button className="text-xs font-bold text-[#991B1F] hover:underline">Lihat Semua</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-4">Kode Barang</th>
                  <th className="px-6 py-4 text-center">Nama Barang</th>
                  <th className="px-6 py-4 text-center">Kategori</th>
                  <th className="px-6 py-4 text-center">Kondisi</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {dataAset.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-[11px] font-medium text-gray-600 uppercase">
                      {item.kode}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={item.img} alt={item.nama} className="w-10 h-10 rounded-lg object-cover shadow-sm" />
                        <span className="text-sm font-bold text-gray-700">{item.nama}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[12px] text-gray-600 font-medium text-center">
                      {item.kategori}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-4 py-1 rounded-full text-[10px] font-normal text-white shadow-sm ${item.kondisi === 'Baik' ? 'bg-blue-600' : 'bg-red-600'}`}>
                        {item.kondisi}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-4 py-1 rounded-full text-[10px] font-normal shadow-sm ${item.status === 'Tersedia' ? 'bg-[#22C55E] text-white' : 'bg-[#F59E0B] text-white'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-1.5 bg-red-600 text-white rounded shadow-sm hover:bg-red-700">
                          <Trash2 size={14} />
                        </button>
                        <button className="p-1.5 bg-blue-600 text-white rounded shadow-sm hover:bg-blue-700">
                          <Eye size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManageAsset;
