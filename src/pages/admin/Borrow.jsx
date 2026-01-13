import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Search, Download, Clock, CheckCircle2, AlertCircle, Check, X, Eye, Filter, History, ClipboardPlus } from 'lucide-react';

const Borrow = () => {
  const [activeTab, setActiveTab] = useState('pengajuan');

  // Data Dummy sesuai desain
  const dataPeminjaman = [
    { id: 1, staff: 'Budi Santoso', divisi: 'Redaksi Foto', barang: 'Sony Alpha A7 III', jadwal: '12 Okt - 14 Okt 2023', durasi: '3 Hari', keperluan: 'Liputan Istana', status: 'Menunggu', tglPinjam: '12 Oktober 2025', tglKembali: '14 Oktober 2025', img: '/img/camera-canon-1300d.jpeg' },
    { id: 2, staff: 'Siti Aminah', divisi: 'Redaksi Video', barang: 'DJI Ronin S', jadwal: '13 Okt - 13 Okt 2023', durasi: '1 Hari', keperluan: 'Vlog Kantor', status: 'Dipinjam', tglPinjam: '13 Oktober 2025', tglKembali: '21 Oktober 2025', img: '/img/camera-canon-1300d.jpeg' },
    { id: 3, staff: 'Rizky Pratama', divisi: 'IT Support', barang: 'MacBook Pro M2', jadwal: '15 Okt - 22 Okt 2023', durasi: '7 Hari', keperluan: 'Dinas Luar Kota', status: 'Selesai', tglPinjam: '15 Oktober 2025', tglKembali: '22 Oktober 2025', img: '/img/camera-canon-1300d.jpeg' },
    { id: 4, staff: 'Dewi Lestari', divisi: 'Koresponden', barang: 'Lensa Canon 70-200mm', jadwal: '14 Okt - 14 Okt 2023', durasi: '1 Hari', keperluan: 'Event Olahraga', status: 'Terlambat', tglPinjam: '14 Oktober 2025', tglKembali: '14 Oktober 2025', img: '/img/camera-canon-1300d.jpeg' },
    { id: 5, staff: 'Anton Wijaya', divisi: 'Redaksi Video', barang: 'Sennheiser Mic Kit', jadwal: 'Urgent: Hari Ini', durasi: '4 Jam', keperluan: 'Breaking News', status: 'Terlambat', tglPinjam: '20 Okt 2023', tglKembali: '21 Okt 2023', img: '/img/camera-canon-1300d.jpeg' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 font-sans">
      <Sidebar />

      <main className="flex-1 p-4 md:p-10 pt-20 md:pt-10 overflow-x-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Manajemen Peminjaman</h1>
            <p className="text-xs md:text-sm text-gray-500 max-w-2xl mt-1">
              Kelola seluruh pengajuan, pemantauan status, dan riwayat peminjaman barang inventaris kantor.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#991B1F] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm hover:bg-red-800 transition-colors">
            <Download size={16} />
            Ekspor CSV
          </button>
        </div>

        {/* Ringkasan Stats Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#991B1F] text-white rounded-xl p-6 flex flex-col items-center relative overflow-hidden">
            <div className="bg-green-400 text-[10px] font-bold px-2 py-0.5 rounded absolute top-4 right-4 text-green-900">+2 Terbaru</div>
            <div className="bg-white/20 p-2 rounded-full mb-3">
              <Clock size={24} />
            </div>
            <p className="text-xs font-medium opacity-90">Menunggu Persetujuan</p>
            <p className="text-3xl font-bold mt-1">5</p>
          </div>
          <div className="bg-[#991B1F] text-white rounded-xl p-6 flex flex-col items-center">
            <div className="bg-white/20 p-2 rounded-full mb-3">
              <CheckCircle2 size={24} />
            </div>
            <p className="text-xs font-medium opacity-90">Peminjaman Aktif</p>
            <p className="text-3xl font-bold mt-1">35</p>
          </div>
          <div className="bg-[#991B1F] text-white rounded-xl p-6 flex flex-col items-center">
            <div className="bg-white/20 p-2 rounded-full mb-3">
              <AlertCircle size={24} />
            </div>
            <p className="text-xs font-medium opacity-90">Terlambat</p>
            <p className="text-3xl font-bold mt-1">5</p>
          </div>
        </div>

        {/* Tab Container */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-100 px-4 md:px-6 pt-4 gap-6 md:gap-8 overflow-x-auto scrollbar-hide">
            <button 
              onClick={() => setActiveTab('pengajuan')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition-all border-b-2 whitespace-nowrap ${activeTab === 'pengajuan' ? 'border-[#991B1F] text-gray-800' : 'border-transparent text-gray-400'}`}
            >
              <ClipboardPlus size={18} /> Pengajuan Peminjaman <span className="bg-red-100 text-[#991B1F] text-[10px] px-1.5 py-0.5 rounded-full">5</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('aktif')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition-all border-b-2 whitespace-nowrap ${activeTab === 'aktif' ? 'border-[#991B1F] text-gray-800' : 'border-transparent text-gray-400'}`}
            >
              <CheckCircle2 size={18} /> Peminjaman Aktif <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === 'aktif' ? 'bg-red-100 text-[#991B1F]' : 'bg-gray-100 text-gray-400'}`}>5</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('riwayat')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition-all border-b-2 whitespace-nowrap ${activeTab === 'riwayat' ? 'border-[#991B1F] text-gray-800' : 'border-transparent text-gray-400'}`}
            >
              <History size={18} /> Riwayat Peminjaman <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === 'riwayat' ? 'bg-red-100 text-[#991B1F]' : 'bg-gray-100 text-gray-400'}`}>5</span>
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div className="p-4 flex flex-col md:flex-row gap-4 justify-between items-center bg-white">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Cari nama staf atau barang..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <select className="flex-1 md:w-40 p-2 bg-white border border-gray-100 rounded-lg text-sm text-gray-500 focus:outline-none">
                <option>Semua Divisi</option>
              </select>
              <button className="p-2 border border-gray-100 rounded-lg text-gray-400">
                <Filter size={18} />
              </button>
            </div>
          </div>

          {/* Table Area */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  <th className="px-6 py-4">Peminjam</th>
                  <th className="px-6 py-4">Nama Barang</th>
                  {activeTab === 'pengajuan' && <th className="px-6 py-4">Jadwal Pinjam</th>}
                  {(activeTab === 'aktif' || activeTab === 'riwayat') && (
                    <>
                      <th className="px-6 py-4">Tanggal Pinjam</th>
                      <th className="px-6 py-4">Tanggal Kembali</th>
                    </>
                  )}
                  {activeTab === 'pengajuan' && <th className="px-6 py-4">Keperluan</th>}
                  {activeTab !== 'pengajuan' && <th className="px-6 py-4 text-center">Status</th>}
                  <th className="px-6 py-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {dataPeminjaman.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {/* Container Foto Profil */}
                        <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-100">
                          {item.img ? (
                            <img 
                              src={item.img} 
                              alt={item.staff} 
                              className="w-full h-full object-cover" 
                              onError={(e) => {
                                // Jika path gambar error/tidak ditemukan, tampilkan inisial otomatis
                                e.target.src = `https://ui-avatars.com/api/?name=${item.staff}&background=random`;
                              }}
                            />
                          ) : (
                            <img 
                              src={`https://ui-avatars.com/api/?name=${item.staff}&background=random`} 
                              alt="avatar" 
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        
                        {/* Detail Nama & Divisi */}
                        <div>
                          <p className="text-xs font-bold text-gray-800 leading-tight">{item.staff}</p>
                          <p className="text-[10px] text-gray-400 font-medium">{item.divisi}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs font-bold text-gray-700">{item.barang}</p>
                    </td>
                    
                    {/* Logika Kolom Berdasarkan Tab */}
                    {activeTab === 'pengajuan' && (
                      <td className="px-6 py-4">
                        <p className="text-[11px] text-gray-600 font-medium">{item.jadwal}</p>
                        <p className="text-[10px] text-red-500 font-bold">{item.durasi}</p>
                      </td>
                    )}

                    {(activeTab === 'aktif' || activeTab === 'riwayat') && (
                      <>
                        <td className="px-6 py-4 text-[11px] text-gray-600 font-medium">{item.tglPinjam}</td>
                        <td className="px-6 py-4 text-[11px] text-gray-600 font-medium">{item.tglKembali}</td>
                      </>
                    )}

                    {activeTab === 'pengajuan' && (
                      <td className="px-6 py-4">
                        <span className="bg-orange-50 text-orange-600 text-[10px] px-2 py-1 rounded font-bold">
                          {item.keperluan}
                        </span>
                      </td>
                    )}

                    {activeTab !== 'pengajuan' && (
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          item.status === 'Selesai' ? 'bg-green-100 text-green-600' : 
                          item.status === 'Dipinjam' ? 'bg-orange-100 text-orange-600' : 
                          'bg-red-100 text-red-600'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    )}

                    {/* Tombol Aksi Berdasarkan Tab */}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        {activeTab === 'pengajuan' ? (
                          <>
                            <button className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors">
                              <X size={18} />
                            </button>
                            <button className="bg-blue-600 text-white flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-bold hover:bg-blue-700 transition-all">
                              <Check size={14} /> Setujui
                            </button>
                          </>
                        ) : activeTab === 'aktif' ? (
                          <button className="border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg text-[10px] font-bold hover:bg-gray-50 transition-all">
                            Konfirmasi pengembalian
                          </button>
                        ) : (
                          <button className="p-2 border border-gray-100 rounded-lg text-gray-400 hover:text-blue-600 transition-colors">
                            <Eye size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="p-5 border-t border-gray-100 flex justify-between items-center text-[11px] text-gray-500 font-medium">
            <p>Menampilkan 1 sampai 5 dari 5 pengajuan</p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">Sebelumnya</button>
              <button className="px-3 py-1.5 border border-red-200 text-red-500 rounded-lg hover:bg-red-50">Selanjutnya</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Borrow;
