'use client';

import { useState, useEffect } from 'react';

export default function StockTradingAI() {
  const [stats, setStats] = useState(null);
  const [trades, setTrades] = useState([]);

  // Mock data
  const mockStats = {
    totalTrades: 156,
    successfulTrades: 132,
    failedTrades: 24,
    successRate: 84.6,
    totalProfit: 15420.75,
    totalLoss: -3240.50,
    netProfit: 12180.25,
    averageTradeValue: 2450.00,
    totalCapital: 125000.00,
    currentROI: 9.74,
    lastUpdated: new Date().toISOString()
  };

  const mockTrades = [
    { id: 1, symbol: 'AAPL', action: 'BUY', quantity: 10, price: 175.50, time: '09:30:15', profit: 245.00, status: 'SUCCESS' },
    { id: 2, symbol: 'GOOGL', action: 'SELL', quantity: 5, price: 2680.25, time: '09:31:22', profit: -120.50, status: 'LOSS' },
    { id: 3, symbol: 'MSFT', action: 'BUY', quantity: 15, price: 335.75, time: '09:32:45', profit: 187.25, status: 'SUCCESS' },
    { id: 4, symbol: 'TSLA', action: 'SELL', quantity: 8, price: 245.80, time: '09:33:12', profit: 312.40, status: 'SUCCESS' },
    { id: 5, symbol: 'NVDA', action: 'BUY', quantity: 12, price: 485.60, time: '09:34:08', profit: 425.75, status: 'SUCCESS' },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats(mockStats);
      setTrades(mockTrades);
    }, 1000);
  }, []);

  if (!stats) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading AI Trading Statistics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Stock Trading AI Dashboard</h1>
          <p className="text-gray-600">Real-time statistics and performance metrics</p>
          <p className="text-sm text-gray-500">Last updated: {new Date(stats.lastUpdated).toLocaleString()}</p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Trades</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.totalTrades}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Success Rate</h3>
            <p className="text-3xl font-bold text-green-600">{stats.successRate}%</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Net Profit</h3>
            <p className="text-3xl font-bold text-green-600">${stats.netProfit.toLocaleString()}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">ROI</h3>
            <p className="text-3xl font-bold text-purple-600">{stats.currentROI}%</p>
          </div>
        </div>

        {/* Detailed Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance Overview</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Successful Trades:</span>
                <span className="font-semibold text-green-600">{stats.successfulTrades}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Failed Trades:</span>
                <span className="font-semibold text-red-600">{stats.failedTrades}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Profit:</span>
                <span className="font-semibold text-green-600">${stats.totalProfit.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Loss:</span>
                <span className="font-semibold text-red-600">${stats.totalLoss.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Trade Value:</span>
                <span className="font-semibold">${stats.averageTradeValue.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Capital Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Capital:</span>
                <span className="font-semibold">${stats.totalCapital.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Current ROI:</span>
                <span className="font-semibold text-purple-600">{stats.currentROI}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Net Profit:</span>
                <span className="font-semibold text-green-600">${stats.netProfit.toLocaleString()}</span>
              </div>
            </div>
            
            {/* Progress bar for success rate */}
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Success Rate</span>
                <span className="text-sm font-semibold">{stats.successRate}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${stats.successRate}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Trades Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Trades (Today)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Symbol</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Action</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Quantity</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Price</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Time</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Profit/Loss</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((trade) => (
                  <tr key={trade.id} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-blue-600">{trade.symbol}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        trade.action === 'BUY' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {trade.action}
                      </span>
                    </td>
                    <td className="px-4 py-3">{trade.quantity}</td>
                    <td className="px-4 py-3">${trade.price}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{trade.time}</td>
                    <td className="px-4 py-3">
                      <span className={`font-semibold ${trade.profit > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${trade.profit.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        trade.status === 'SUCCESS' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {trade.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}