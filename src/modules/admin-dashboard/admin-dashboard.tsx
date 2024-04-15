import { Layout, LayoutBody, LayoutHeader } from "@/components/layouts";
import UserHeader from "@/components/user-header";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ListFilterIcon, FileIcon, PlusCircleIcon } from "lucide-react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
const Products = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <LayoutHeader>
        <UserHeader
          headerName={
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={"/dashboard-app"} className="font-light">
                      Dashboard
                    </Link>
                    {/* <Link href="#">Dashboard</Link> */}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={"#"} className="font-light">
                      Posts
                    </Link>
                    {/* <Link href="#">Products</Link> */}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>All Posts</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
        />
      </LayoutHeader>
      <LayoutBody className="bg-[#e4edeb]">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger className="hidden sm:flex" value="archived">
                Archived
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="h-8 gap-1" size="sm" variant="outline">
                    <ListFilterIcon className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Filter
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Active
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="h-8 gap-1" size="sm" variant="outline">
                <FileIcon className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <Button
                className="h-8 gap-1"
                size="sm"
                onClick={() => navigate("/admin-dashboard/create-posts")}
                iconPlacement="left"
                Icon={ArrowLeftIcon}
              >
                <PlusCircleIcon className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Posts
                </span>
              </Button>
            </div>
          </div>
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Posts</CardTitle>
                <CardDescription>
                  Manage your posts and the reader's view.
                </CardDescription>
              </CardHeader>
              <CardContent>No posts</CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing
                  <strong>1-10</strong> of <strong>32</strong>
                  products
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        {/* <ProductTable /> */}
      </LayoutBody>
    </Layout>
  );
};
export default Products;
