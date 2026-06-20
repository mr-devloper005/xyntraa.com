'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Download, Eye } from 'lucide-react'
import { mockPressAssets } from '@/data/mock-data'

export function PressKitClient() {
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <>
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="space-y-4">
          {mockPressAssets.map((asset) => (
            <div key={asset.id} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{asset.title}</p>
                  <p className="text-xs text-gray-600">{asset.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
                    {asset.fileType}
                  </span>
                  <button
                    onClick={() => setActiveAssetId(asset.id)}
                    className="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Eye className="h-3 w-3" />
                    Preview
                  </button>
                  <button className="inline-flex items-center gap-1 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700 transition-colors">
                    <Download className="h-3 w-3" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {activeAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{activeAsset.title}</h3>
                <button
                  onClick={() => setActiveAssetId(null)}
                  className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              {activeAsset.previewUrl && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-gray-200 bg-gray-50 mb-4">
                  <Image
                    src={activeAsset.previewUrl}
                    alt={activeAsset.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-sm text-gray-600 mb-6">{activeAsset.description}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveAssetId(null)}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors">
                  <Download className="h-4 w-4" />
                  Download {activeAsset.fileType}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
