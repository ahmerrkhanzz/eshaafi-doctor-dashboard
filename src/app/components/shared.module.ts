import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NguCarouselModule } from "@ngu/carousel";

import { TopnavComponent } from "./topnav/topnav.component";
import { LocationSearchBoxComponent } from "./location-search-box/location-search-box.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { FooterComponent } from "./footer/footer.component";
import { MobileBannerComponent } from "./mobile-banner/mobile-banner.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { UiCarouselComponent } from "./ui-carousel/ui-carousel.component";
import { PromotionsComponent } from "./promotions/promotions.component";
import { LinearCardsComponent } from "./linear-cards/linear-cards.component";
import { DoctorInfoCardComponent } from './doctor-info-card/doctor-info-card.component';

@NgModule({
  declarations: [
    TopnavComponent,
    LocationSearchBoxComponent,
    CarouselComponent,
    FooterComponent,
    MobileBannerComponent,
    BlogsComponent,
    UiCarouselComponent,
    PromotionsComponent,
    LinearCardsComponent,
    DoctorInfoCardComponent,
  ],
  imports: [CommonModule, NgbModule, FormsModule, NguCarouselModule],
  exports: [
    TopnavComponent,
    LocationSearchBoxComponent,
    CarouselComponent,
    FooterComponent,
    MobileBannerComponent,
    BlogsComponent,
    UiCarouselComponent,
    PromotionsComponent,
    LinearCardsComponent,
    DoctorInfoCardComponent,
  ],
  entryComponents: [],
})
export class SharedModule {}
