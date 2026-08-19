import CodeIcon from "@mui/icons-material/Code";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import type { SvgIconComponent } from "@mui/icons-material";
import type { NavIcon } from "@/types/portfolio";

/** Shared by the desktop sidebar and the mobile bottom bar. */
export const navIconMap: Record<NavIcon, SvgIconComponent> = {
  home: HomeRoundedIcon,
  user: PersonRoundedIcon,
  sparkles: CodeIcon,
  briefcase: WorkRoundedIcon,
  grid: GridViewRoundedIcon,
  school: SchoolRoundedIcon,
};
