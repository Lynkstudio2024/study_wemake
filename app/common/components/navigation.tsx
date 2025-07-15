import { Link } from "react-router";
import { Separator } from "../components/ui/separator";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "./ui/navigation-menu";

const menus = [
  {
    name: "Products",
    to: "/products",
    items: [
      {
        name: "Leaderboards",
        description: "See the top performers in your community",
        to: "/products/leaderboards",
      },
      {
        name: "Categories",
        description: "See the top categories in your community",
        to: "/products/categories",
      },
      {
        name: "Search",
        description: "Search for a product",
        to: "/products/search",
      },
      {
        name: "Submit a product",
        description: "Submit a product to our community",
        to: "/products/submit",
      },
      {
        name: "Promote",
        description: "Promote a product to our community",
        to: "/products/promote",
      }
    ]
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Remote Jobs",
        description: "Find a remote job in our community",
        to: "/jobs?location=remote",
      },
      {
        name: "Full-Time Jobs",
        description: "Find a full-time job in our community",
        to: "/jobs?type=full-time",
      },
      {
        name: "Freelance Jobs",
        description: "Find a freelance job in our community",
        to: "/jobs?type=freelance",
      },
      {
        name: "Internships",
        description: "Find an internship in our community",
        to: "/jobs?type=internship",
      },
      {
        name: "Submit a Job",
        description: "Submit a job to our community",
        to: "/jobs/submit",
      },
    ]
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "See all posts in our community",
        to: "/community",
      },
      {
        name: "Top Posts",
        description: "See the top posts in our community",
        to: "/community?sort=top",
      },
      {
        name: "New Posts",
        description: "See the new posts in our community",
        to: "/community?sort-new"
      },
      {
        name: "Create a Post",
        description: "Create a post to our community",
        to: "/community/create",
      },
    ]
  },
  {
    name: "IdeasGPT",
    to: "/ideasgpt",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "See all teams in our community",
        to: "/teams",
      },
      {
        name: "Create a Team",
        description: "Create a team to our community",
        to: "/teams/create",
      },
    ]
  }
]

const Navigation = () => {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex items-center h-4">
        <Link to="/" className="font-bold tracking-tighter text-lg">wemake</Link>
        <Separator orientation="vertical" className="mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map(menu => (
              <NavigationMenuItem key={menu.name}>
                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                    {menu.items?.map((item) => (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link className="p-3 space-y-1 block leading-none no-underline outline-none" to={item.to}>
                            <span>{item.name}</span>
                            <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navigation;