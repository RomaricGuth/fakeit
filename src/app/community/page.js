import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import check from "/public/assets/check.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function Page() {

  const data = [
    {
      email: 'john.doe@gmail.com',
      dateSubscribed: '2023-03-15',
      unsubscribed: false,
      comment: '',
    },
    {
      email: 'jane.smith@hotmail.com',
      dateSubscribed: '2022-11-10',
      unsubscribed: true,
      comment: '',
    },
    {
      email: 'alex.wilson@yahoo.com',
      dateSubscribed: '2021-07-22',
      unsubscribed: false,
      comment: '',
    },
    {
      email: 'sarah.connor@outlook.com',
      dateSubscribed: '2023-01-05',
      unsubscribed: false,
      comment: '',
    },
    {
      email: 'michael.scott@dundermifflin.com',
      dateSubscribed: '2022-06-30',
      unsubscribed: false,
      comment: '',
    },
    {
      email: 'angela.martin@gmail.com',
      dateSubscribed: '2021-10-01',
      unsubscribed: true,
      comment: '.',
    },
    {
      email: 'kevin.malone@yahoo.com',
      dateSubscribed: '2023-08-18',
      unsubscribed: false,
      comment: 'Would prefer if the product was blue.',
    },
    {
      email: 'pam.beesly@dundermifflin.com',
      dateSubscribed: '2022-12-14',
      unsubscribed: false,
      comment: '',
    },
    {
      email: 'jim.halpert@gmail.com',
      dateSubscribed: '2021-03-25',
      unsubscribed: false,
      comment: 'Very interesting project. Looking forward to updates.',
    },
    {
      email: 'dwight.schrute@schrutefarms.com',
      dateSubscribed: '2023-05-04',
      unsubscribed: false,
      comment: '',
    },
  ];

  return (
    <div className="bg-white py-image">
      <section className="mt-image">
        <div className="flex justify-between">
          <h2 className="text-2xl">Contacts</h2>
          <Button variant="text" className="rounded">Export</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Email</TableHead>
              <TableHead>Date subscribed</TableHead>
              <TableHead>Unsubscribed</TableHead>
              <TableHead>Comment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.sort((a, b) => a.dateSubscribed.localeCompare(b.dateSubscribed)).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.dateSubscribed}</TableCell>
                <TableCell>{row.unsubscribed && <Image src={check} alt="unsubcribed" />}</TableCell>
                <TableCell>{row.comment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-center mt-image gap-title">
          <Button className="rounded w-40">Send survey</Button>
          <Button variant="outline" className="rounded w-40">Send newsletter</Button>
        </div>

      </section>
    </div>
  );
}