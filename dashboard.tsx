import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { SearchIcon, BellIcon, UserIcon, PackageIcon, TruckIcon, HospitalIcon, DollarSignIcon } from 'lucide-react'

const data = [
  { name: 'Jan', consumption: 4000 },
  { name: 'Feb', consumption: 3000 },
  { name: 'Mar', consumption: 2000 },
  { name: 'Apr', consumption: 2780 },
  { name: 'May', consumption: 1890 },
  { name: 'Jun', consumption: 2390 },
]

const vendorActivities = [
  { id: 1, vendor: 'PharmaCorp', activity: 'Supply Order Prepared', date: '2023-09-28', status: 'Completed' },
  { id: 2, vendor: 'MediSupply', activity: 'Shipment in Transit', date: '2023-09-27', status: 'In Progress' },
  { id: 3, vendor: 'HealthDist', activity: 'Order Received', date: '2023-09-26', status: 'Completed' },
]

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <span className="text-2xl font-bold text-gray-900">DrugTrack</span>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Button variant="ghost">Dashboard</Button>
              <Button variant="ghost">Inventory</Button>
              <Button variant="ghost">Orders</Button>
              <Button variant="ghost">Reports</Button>
            </nav>
            <div className="flex items-center md:ml-12">
              <Button variant="ghost" size="icon">
                <BellIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <UserIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Inventory</CardTitle>
                <PackageIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245,678</div>
                <p className="text-xs text-muted-foreground">units in stock</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                <TruckIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">orders in transit</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Institutions Served</CardTitle>
                <HospitalIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">medical facilities</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12.4M</div>
                <p className="text-xs text-muted-foreground">inventory worth</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Drug Consumption Pattern</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="consumption" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vendor Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vendorActivities.map((activity) => (
                      <TableRow key={activity.id}>
                        <TableCell>{activity.vendor}</TableCell>
                        <TableCell>{activity.activity}</TableCell>
                        <TableCell>{activity.date}</TableCell>
                        <TableCell>
                          <Badge variant={activity.status === 'Completed' ? 'default' : 'secondary'}>
                            {activity.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Distribution Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[2/1] bg-slate-100 rounded-lg overflow-hidden">
                <svg viewBox="0 0 800 400" className="w-full h-full">
                  <path d="M165.7,236.4l-28.6-20.2l-28.4,20.2l10.8-33.5l-28.4-20.6l35.2-0.3l10.9-33.4l11.1,33.4l35.2,0.3l-28.3,20.6 L165.7,236.4z" fill="#D1D5DB" />
                  <circle cx="400" cy="200" r="5" fill="#EF4444" />
                  <circle cx="300" cy="250" r="5" fill="#EF4444" />
                  <circle cx="500" cy="150" r="5" fill="#EF4444" />
                  <text x="400" y="220" fontSize="10" textAnchor="middle">Main Hub</text>
                  <text x="300" y="270" fontSize="10" textAnchor="middle">Distribution Center</text>
                  <text x="500" y="170" fontSize="10" textAnchor="middle">Regional Warehouse</text>
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">© 2023 DrugTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
